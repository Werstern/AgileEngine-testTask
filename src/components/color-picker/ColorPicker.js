import React from 'react';

import './ColorPicker.css';
import { colorPalette } from './colors.js';

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
