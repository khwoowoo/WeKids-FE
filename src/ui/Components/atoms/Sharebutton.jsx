import React from "react";
import { Share2Icon } from "@radix-ui/react-icons";

const SHARE_BUTTON_DEFAULT = {
  width: "w-[76px]",
  height: "h-[57px]",
  bgColor: "bg-sub02",
  iconColor: "text-white",
  radius: "rounded-[10px]",
};

const ShareButton = ({
  onClick,
  width = SHARE_BUTTON_DEFAULT.width,
  height = SHARE_BUTTON_DEFAULT.height,
  bgColor = SHARE_BUTTON_DEFAULT.bgColor,
  iconColor = SHARE_BUTTON_DEFAULT.iconColor,
  radius = SHARE_BUTTON_DEFAULT.radius,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${width}
        ${height}
        ${bgColor}
        ${iconColor}
        ${radius}
        flex 
        items-center 
        justify-center
      `}
    >
      <div>
        <Share2Icon className="w-6 h-6" />
      </div>
    </button>
  );
};

export default ShareButton;
