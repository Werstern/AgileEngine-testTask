import React from 'react';
import Synonym from './synonym/Synonym.js';

const synonymList = (props) => {
  let synonyms = null;
  if (props.synonyms.length !== 0) {
    synonyms = (
      <React.Fragment>
        <h4>Synonyms List</h4>
        <ul>
          {props.synonyms.map(synonym => {
            return <Synonym word={synonym} />
          })}
        </ul>
      </React.Fragment>
    );
  }
  return synonyms;
}

export default synonymList;
