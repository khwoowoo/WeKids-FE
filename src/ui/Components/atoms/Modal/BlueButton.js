'use client';
import React from 'react';

const BLUE_BUTTON_DEFAULT = {
  width: "76px",
  height: "57px",
  bgColor: "#123F6D"
};

const BlueButton = ({ 
  onClick,
  width = BLUE_BUTTON_DEFAULT.width, 
  height = BLUE_BUTTON_DEFAULT.height,
  bgColor = BLUE_BUTTON_DEFAULT.bgColor 
}) => {
  return (
    <button 
      onClick={onClick}
      style={{ 
        width,
        height,
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        viewBox={`0 0 ${parseInt(width)} ${parseInt(height)}`} 
        fill="none"
      >
        <rect width={width} height={height} fill={bgColor}/>
      </svg>
    </button>
  );
};

export default BlueButton;