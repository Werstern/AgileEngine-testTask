import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

import axios from 'axios';

class App extends Component {
    constructor(props) {
      super(props);
      this.state= {
        notesList: [],
        clickedElement: {},
        selectedIndx: '',
        synonyms: []
      }
    }
    //getText() {
    //    getMockText().then(function (result) {
    //        console.log(result);
    //    });
    //}
    findSynonym = (word) => {
      axios.get('https://api.datamuse.com/words?ml=' + word)
        .then(response => {
          const data = response.data.map(item => {
            return item.word;
          });

          this.setState({
            synonyms: data
          })
        })
        .catch(err => {
          console.log(err);
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

    handleTextSubmit = (notesList) => {
      this.setState({
        notesList: notesList
      });
    }

    handleDoubleClick = (listId) => {
      const newList = [...this.state.notesList];
      const elementIndex = newList.map(list => list.text).indexOf(listId);
      const newUpdates = newList[elementIndex];
      this.setState({clickedElement: newUpdates, selectedIndx: elementIndex});
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
                      synonyms={this.state.synonyms} />
                </main>
            </div>
        );
    }
}

export default App;
