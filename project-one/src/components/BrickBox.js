import React from 'react';
import './BrickBox.css';

function BrickBox(props) {
  const brickBoxStyle = {
    height: props.height,
    width: props.width
  };  
  return (
    <div className='brickBlock' style={brickBoxStyle}>
        <span>
            {props.text}
        </span>
    </div>
  )
}

export default BrickBox