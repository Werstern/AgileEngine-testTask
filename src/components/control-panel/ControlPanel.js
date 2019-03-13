import React from 'react';

import './ControlPanel.css';

const controlPanel = (props) => {
	return (
		<div id="control-panel">
			<div id="format-actions">
				<button
				  type="button"
				  className={props.clickedElement.bold ? 'format-action active' : 'format-action'}
				  disabled={!props.disabled}
				  onClick={() => props.onHandleChangeProps('bold')}><b>B</b></button>
				<button
				  type="button"
				  className={props.clickedElement.italic ? 'format-action active' : 'format-action'}
				  disabled={!props.disabled}
				  onClick={() => props.onHandleChangeProps('italic')}><i>I</i></button>
				<button
				  type="button"
				  className={props.clickedElement.underline ? 'format-action active' : 'format-action'}
				  disabled={!props.disabled}
				  onClick={() => props.onHandleChangeProps('underline')}><u>U</u></button>
				<button
				  className="format-action"
				  type="button"
				  disabled={!props.disabled}
				  onClick={() => props.findSynonym(props.clickedElement.text)}>Synonyms</button>
				<button
				  type="button"
				  className="format-action"
				  disabled={!props.disabled}
				  onClick={() => props.onHandleResetDblClickedElem()}>Confirm</button>
			</div>
		</div>
	);
}

export default controlPanel;
