import React from 'react';

const synonym = (props) => {
  return (
    <li
      key={props.word}
      id={props.word}>{props.word}</li>
  );
}

export default synonym;
