import React from 'react';

import './ColorPicker.css';

const colorPalette = [
  '#000000',
  '#FF897D',
  '#FFD27A',
  '#FFFF85',
  '#CBFF8A',
  '#A4FFEB',
  '#7CD7FF',
  '#80AFFF',
  '#B384FF',
  '#F9BAD0',
  '#D7CCC8',
  '#CFD8DC'];
  
  const colorPicker = (props) => {
	return (
	  <div className="color-picker__container">
			{
			    colorPalette.map(color =>
					<div
					    className={`color-picker__color ${(props.chosenColor === color) ? 'active' : ''}`}
					    style={{backgroundColor: color}}
					    data-color={color}
					    key={color}
						onClick={(e) => props.handlePickColor(e.target.dataset.color)}
					></div>
			    )
			}
		</div>
	);
  }
  
  export default colorPicker;