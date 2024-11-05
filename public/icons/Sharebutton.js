import React from "react";
import Upload from "../../../../../public/icons/Upload";

const SHARE_BUTTON_DEFAULT = {
  width: "w-[76px]",
  height: "h-[57px]",
  bgColor: "bg-[#123F6D]",
  iconColor: "text-white",
};

const ShareButton = ({
  onClick,
  width = SHARE_BUTTON_DEFAULT.width,
  height = SHARE_BUTTON_DEFAULT.height,
  bgColor = SHARE_BUTTON_DEFAULT.bgColor,
  iconColor = SHARE_BUTTON_DEFAULT.iconColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${width}
        ${height}
        ${bgColor}
        ${iconColor}
        flex 
        items-center 
        justify-center
      `}
    >
      <div>
        <Upload />
      </div>
    </button>
  );
};

export default ShareButton;
