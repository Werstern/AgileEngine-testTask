import React from 'react';

import './Synonym.css';

const synonym = (props) => {
  return (
    <li
      className="Synonym"
      id={props.word}
		  onDoubleClick={props.onHandleChangeText}>
  		<div className={props.activeWord === props.word ? 'activeWord' : ''}>
  			{props.word}
  		</div>
    </li>
  );
}

export default synonym;
