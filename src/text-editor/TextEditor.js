import React, { Component } from 'react';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      text: ''
    }
  }

  handleNoteChange = (e) => {
    const separatedText = e.target.value.split(' ').map(text => {
      return {
        text: text,
        bold: false,
        italic: false,
        underline: false
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
      <div>
        <h3>TextEditor light</h3>
        <textarea
          rows={5}
          cols={80}
          placeholder="Type something here..."
          className="editor__textarea"
          onChange={this.handleNoteChange}
          value={this.state.text ? this.state.text : ''}
        />
        <button
          className="editor__button"
          onClick={() => this.handleSubmit(this.state.textInput)}
        >Add</button>
      </div>
    )
  }
}

export default TextEditor;
