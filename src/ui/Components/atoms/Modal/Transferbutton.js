'use client';
import React from 'react';

const BUTTON_DEFAULT = {
  width: "w-[128px]",
  height: "h-[60px]",
  text: "이체하기",
  bgColor: "bg-[#D9D9D9]",
  textColor: "text-black"
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
      className={`
        ${width}
        ${height}
        ${BUTTON_DEFAULT.bgColor}
        ${BUTTON_DEFAULT.textColor}
        rounded-md
        px-6
        py-3
      `}
    >
      {text}
    </button>
  );
};

export default TransferButton;