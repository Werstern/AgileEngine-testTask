import React from 'react';
import './ItemList.css';

const itemList = (props) => {
  const elemStyle = {
    'fontWeight': props.bold ? 'bold' : 'normal',
    'textDecoration': props.underline ? 'underline' : 'none',
    'fontStyle': props.italic ? 'italic' : 'normal'
  };

  return (
    <li
      style={elemStyle}
      onDoubleClick={props.onHandleDoubleClick}>{props.text} </li>
  )
}

export default itemList;
