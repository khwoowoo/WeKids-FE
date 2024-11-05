'use client';
import React from 'react';

const RECTANGLE_DEFAULT = {
  width: "400px",
  height: "60px",
  bgColor: "#FFFFFF",
  borderColor: "#D1D5DB"
};

const Rectangle = ({ 
  width = RECTANGLE_DEFAULT.width,
  height = RECTANGLE_DEFAULT.height,
  bgColor = RECTANGLE_DEFAULT.bgColor,
  borderColor = RECTANGLE_DEFAULT.borderColor,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      style={{ 
        width, 
        height,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '6px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
    />
  );
};

export default Rectangle;