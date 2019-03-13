import React from 'react';

const synonym = (props) => {
  return (
    <li id={props.word}
		onDoubleClick={props.onHandleChangeText}>
		<div>
			{props.word}
		</div>
	</li>
  );
}

export default synonym;
