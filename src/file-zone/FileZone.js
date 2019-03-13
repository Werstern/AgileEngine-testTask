import React from 'react';

import './FileZone.css';

import TextEditor from '../text-editor/TextEditor.js';
import ItemsList from '../items-list/ItemsList.js';
import SynonymList from '../synonym-list/SynonymList.js';
import ColorPicker from '../color-picker/ColorPicker.js';

const fileZone = (props) => {
	let colorPalette = null;
	if (props.showPalette) {
		colorPalette = <ColorPicker chosenColor={props.shosenColor} handlePickColor={props.onHandlePickColor} />
	}
	
	return (
		<div id="file-zone">
			<div id="file">
			  {colorPalette}
			  <TextEditor onHandleSubmit={props.onHandleTextSubmit}/>
			  <ItemsList
				notesList={props.notesList}
				onHandleDoubleClick={props.onHandleDoubleClick} />
			  <SynonymList 
				synonyms={props.synonyms} 
				onHandleChangeText={props.onHandleChangeText} />
			</div>
		</div>
	);
}

export default fileZone;
