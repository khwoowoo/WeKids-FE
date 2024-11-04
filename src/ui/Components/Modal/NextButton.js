'use client';
import React from 'react';

const BUTTON_DEFAULT = {
  width: "400px",
  height: "61px",
  text: "다음",
  bgColor: "#2483C5",
  hoverColor: "#1f6ea3",
  textColor: "#FFFFFF"
};

const NextButton = ({ 
  onClick, 
  width = BUTTON_DEFAULT.width, 
  height = BUTTON_DEFAULT.height, 
  text = BUTTON_DEFAULT.text 
}) => {
  return (
    <button 
      onClick={onClick}
      style={{ 
        width, 
        height, 
        backgroundColor: BUTTON_DEFAULT.bgColor,
        color: BUTTON_DEFAULT.textColor,
        borderRadius: '6px',
        padding: '12px 24px',
        transition: 'background-color 300ms'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = BUTTON_DEFAULT.hoverColor}
      onMouseOut={(e) => e.target.style.backgroundColor = BUTTON_DEFAULT.bgColor}
    >
      {text}
    </button>
  );
};

export default NextButton;