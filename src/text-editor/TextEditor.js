import React, { Component } from 'react';

import './TextEditor.css';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      text: ''
    }
  }

  handleTextChange = (e) => {
    const separatedText = e.target.value.split(' ').map(text => {
	  const getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	  };
	  
      return {
        text: text,
        bold: false,
        italic: false,
        underline: false,
		textColor: '#000000',
		id: getRandomInt(100000, 1000000)
      }
    });

    this.setState({
      textInput: separatedText,
      text: e.target.value
    });
  }

  handleSubmit = (notesList) => {
    this.props.onHandleSubmit(notesList);
    this.resetState();
  }

  resetState() {
    this.setState({
      textInput: '',
      text: ''
    });
  }

  render() {
    return (
      <div className='editor'>
        <textarea
          rows={5}
          cols={80}
          placeholder="Type something here..."
          className="editor__textarea"
          onChange={this.handleTextChange}
          value={this.state.text ? this.state.text : ''}
        />
        <button
          className="editor__button"
          onClick={() => this.handleSubmit(this.state.textInput)}
        >Add</button>
      </div>
    );
  }
}

export default TextEditor;
