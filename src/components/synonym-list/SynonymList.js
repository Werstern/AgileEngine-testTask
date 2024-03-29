import React from 'react';

import './SynonymList.css';

import Synonym from './synonym/Synonym.js';

const synonymList = (props) => {
  let synonyms = null;
  if (props.synonyms.length !== 0) {
    synonyms = (
      <React.Fragment>
        <h4 className="synonyms_header">Synonyms List (choose one if you want)</h4>
        <ul className="notesgrid__container">
          {props.synonyms.map(synonym => {
            const getRandomInt = (min, max) => {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min;
            };

            const random = getRandomInt(100000, 1000000);

            return (
              <Synonym
                key={random}
                word={synonym}
                activeWord={props.activeWord}
                onHandleChangeText={() => props.onHandleChangeText(synonym)}/>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  if (props.error) {
    synonyms = <h4 className="synonyms_header">{props.error.message}</h4>
  }
  return synonyms;
}

export default synonymList;
