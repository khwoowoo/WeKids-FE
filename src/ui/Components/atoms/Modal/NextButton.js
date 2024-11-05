'use client';
import React from 'react';

const BUTTON_DEFAULT = {
  width: "w-[400px]",  
  height: "h-[61px]", 
  text: "다음",
  bgColor: "bg-[#2483C5]", 
  hoverColor: "hover:bg-[#1f6ea3]", 
  textColor: "text-white"  
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
      className={`
        ${width} 
        ${height} 
        ${BUTTON_DEFAULT.bgColor} 
        ${BUTTON_DEFAULT.hoverColor} 
        ${BUTTON_DEFAULT.textColor} 
        rounded-md 
        px-6 
        py-3 
        transition-colors 
        duration-300
      `}
    >
      {text}
    </button>
  );
};

export default NextButton;