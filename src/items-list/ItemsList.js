import React from 'react';
import ItemList from './item-list/ItemList.js';

const itemsList = (props) => {
  let outputString = null;
  if (props.notesList.length !== 0) {
    outputString = props.notesList.map(prop => (
      <ItemList
        id={prop.text}
        key={prop.text}
        text={prop.text}
        bold={prop.bold}
        italic={prop.italic}
        underline={prop.underline}
        onHandleDoubleClick={() => props.onHandleDoubleClick(prop.text)} />
      )
    );
  }
  return (
    <ul>
      {outputString}
    </ul>
  );
}

export default itemsList;
