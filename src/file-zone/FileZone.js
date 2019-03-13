import React, { Component } from 'react';
import './FileZone.css';
import TextEditor from '../text-editor/TextEditor.js';
import ItemsList from '../items-list/ItemsList.js';
import SynonymList from '../synonym-list/SynonymList.js';

class FileZone extends Component {

    render() {
        return (
            <div id="file-zone">
                <div id="file">
                  <TextEditor onHandleSubmit={this.props.onHandleTextSubmit}/>
                  <ItemsList
                    notesList={this.props.notesList}
                    onHandleDoubleClick={this.props.onHandleDoubleClick} />
                  <SynonymList synonyms={this.props.synonyms} />
                </div>
            </div>
        );
    }
}

export default FileZone;
