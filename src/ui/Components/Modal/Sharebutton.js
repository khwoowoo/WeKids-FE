import React from 'react';

const ShareButton = () => {
  return (
    <button className="w-[76px] h-[57px] bg-[#123F6D] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="57" viewBox="0 0 76 57" fill="none">
        <rect width="76" height="57" fill="#123F6D"/>
        <line x1="29" y1="27" x2="29" y2="39" stroke="white" strokeWidth="2"/>
        <path d="M48.625 27V33V39" stroke="white" strokeWidth="2"/>
        <path d="M28 37.7998H38.5H49" stroke="white" strokeWidth="2"/>
        <path d="M39.7071 16.2929C39.3166 15.9024 38.6834 15.9024 38.2929 16.2929L31.9289 22.6569C31.5384 23.0474 31.5384 23.6805 31.9289 24.0711C32.3195 24.4616 32.9526 24.4616 33.3431 24.0711L39 18.4142L44.6569 24.0711C45.0474 24.4616 45.6805 24.4616 46.0711 24.0711C46.4616 23.6805 46.4616 23.0474 46.0711 22.6569L39.7071 16.2929ZM40 32L40 17L38 17L38 32L40 32Z" fill="white"/>
      </svg>
    </button>
  );
};

export default ShareButton;