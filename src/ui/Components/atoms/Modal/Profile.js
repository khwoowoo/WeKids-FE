'use client';
import React from 'react';
import Image from 'next/image';

const PROFILE_DEFAULT = {
  width: "w-[60px]",
  height: "h-[60px]",
  bgColor: "bg-white",
  borderColor: "border-2 border-gray-200",
  imagePath: "/images/profile.jpg"
};

const Profile = ({ 
    width = PROFILE_DEFAULT.width, 
    height = PROFILE_DEFAULT.height,
    bgColor = PROFILE_DEFAULT.bgColor,
    imagePath = PROFILE_DEFAULT.imagePath  // 이미지 경로 prop 추가
  }) => {
    return (
      <div 
        className={`
          ${width}
          ${height}
          ${bgColor}
          ${PROFILE_DEFAULT.borderColor}
          rounded-full
          overflow-hidden
          relative
        `}
      >
        <Image 
          src={imagePath}  
          alt="profile image"
          fill
          className="object-cover"
        />
      </div>
    );
  };
  
  export default Profile;