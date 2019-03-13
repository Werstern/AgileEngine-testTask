import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button
                      type="button"
                      className={this.props.clickedElement.bold ? 'format-action active' : 'format-action'}
                      disabled={!this.props.disabled}
                      onClick={() => this.props.onHandleChangeProps('bold')}><b>B</b></button>
                    <button
                      type="button"
                      className={this.props.clickedElement.italic ? 'format-action active' : 'format-action'}
                      disabled={!this.props.disabled}
                      onClick={() => this.props.onHandleChangeProps('italic')}><i>I</i></button>
                    <button
                      type="button"
                      className={this.props.clickedElement.underline ? 'format-action active' : 'format-action'}
                      disabled={!this.props.disabled}
                      onClick={() => this.props.onHandleChangeProps('underline')}><u>U</u></button>
                    <button
                      className="format-action"
                      type="button"
                      disabled={!this.props.disabled}
                      onClick={() => this.props.onHandleResetDblClickedElem()}>Reset</button>
                    <button
                      className="format-action"
                      type="button"
                      disabled={!this.props.disabled}
                      onClick={() => this.props.findSynonym(this.props.clickedElement.text)}>Syn</button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
