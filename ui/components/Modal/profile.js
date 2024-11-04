import React from 'react';

const CircleProfile = () => {
  return (
    <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-gray-200">
      <img 
        src="/images/profile.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CircleProfile;