import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      notesList: [],
      clickedElement: {},
      selectedIndx: '',
      synonyms: [],
      fetching: false,
      error: ''
    }
  }

  findSynonym = (word) => {
    this.setState({fetching: true});

    axios.get('https://api.datamuse.com/words?ml=' + word)
      .then(response => {
        const data = response.data.map(item => {
          return item.word;
        });

        this.setState({
          synonyms: data,
          fetching: false
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          fetching: false
        });
      })
  }

  handleResetDblClickedElem = () => {
    this.setState({
      clickedElement: {},
      selectedIndx: '',
      synonyms: []
    });
  }

  handleChangeProps = (prop) => {
    const choosenElement = {...this.state.clickedElement};
    choosenElement[prop] = !choosenElement[prop];

    const newList = [...this.state.notesList];
    newList[this.state.selectedIndx] = choosenElement
    this.setState({
      notesList: newList,
      clickedElement: choosenElement
    });
  }

	handleChangeText = (text) => {
		const choosenElement = {...this.state.clickedElement};
		choosenElement.text = text;

		const newList = [...this.state.notesList];
        newList[this.state.selectedIndx] = choosenElement
		this.setState({
		  notesList: newList,
		  clickedElement: choosenElement
		});
	}

	handlePickColor = (color) => {
	  const choosenElement = {...this.state.clickedElement};
	  choosenElement.textColor = color;

	  const newList = [...this.state.notesList];
      newList[this.state.selectedIndx] = choosenElement;
	  this.setState({
      notesList: newList,
      clickedElement: choosenElement
    });
  }

  handleTextSubmit = (notesList) => {
    this.setState({
      notesList: notesList
    });
  }

  handleDoubleClick = (listId) => {
    const newList = [...this.state.notesList];
    const elementIndex = newList.map(list => list.id).indexOf(listId);
    const newUpdates = newList[elementIndex];

    this.setState({
      clickedElement: newUpdates,
      selectedIndx: elementIndex
    });
  }

  render() {
    return (
      <div className="App">
        <header>
            <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel
            onHandleChangeProps={this.handleChangeProps}
            onHandleResetDblClickedElem={this.handleResetDblClickedElem}
            disabled={this.state.clickedElement.text ? true : false}
            clickedElement={this.state.clickedElement}
            findSynonym={this.findSynonym} />
          <FileZone
            onHandleTextSubmit={this.handleTextSubmit}
            onHandleDoubleClick={this.handleDoubleClick}
            notesList={this.state.notesList}
            synonyms={this.state.synonyms}
					  showPalette={this.state.clickedElement.text ? true : false}
					  shosenColor={this.state.clickedElement.textColor}
					  onHandlePickColor={this.handlePickColor}
					  onHandleChangeText={this.handleChangeText}
            activeWord={this.state.clickedElement.text}
            error={this.state.error}
          />
        </main>
      </div>
    );
  }
}

export default App;
