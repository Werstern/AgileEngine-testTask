import React from 'react';

import ItemList from './item-list/ItemList.js';

const itemsList = (props) => {
  const outputString = props.notesList.map(prop => (
    <ItemList
      id={prop.id}
      key={prop.id}
      text={prop.text}
      bold={prop.bold}
      textColor={prop.textColor}
      italic={prop.italic}
      underline={prop.underline}
      onHandleDoubleClick={() => props.onHandleDoubleClick(prop.id)} />
    )
  );

  return (
    <ul>
      {outputString}
    </ul>
  );
}

export default itemsList;
