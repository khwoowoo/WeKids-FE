'use client';
import React from 'react';

const BUTTON_DEFAULT = {
  width: "128px",
  height: "60px",
  text: "이체하기",
  bgColor: "#D9D9D9",
  textColor: "#000000"
};

const TransferButton = ({ 
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
        padding: '12px 24px'
      }}
    >
      {text}
    </button>
  );
};

export default TransferButton;