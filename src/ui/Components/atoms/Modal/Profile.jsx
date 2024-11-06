// Profile.js

import useStore from "@/src/stores/useAccountInfo";
import Image from "next/image";

const PROFILE_DEFAULT = {
  width: "w-[60px]",
  height: "h-[60px]",
  bgColor: "bg-white",
  borderColor: "border-2 border-gray-200",
  imagePath: "/images/Avatar.svg",
  radius: "rounded-full",
};

const Profile = ({ accountInfo }) => {
  const { setSelectedAccount } = useStore((state) => state); // Zustand에서 setSelectedAccount 가져오기

  const handleClick = () => {
    setSelectedAccount(accountInfo); // 클릭 시 상태 업데이트
  };

  return (
    <div
      onClick={handleClick}
      className={`
        ${PROFILE_DEFAULT.width}
        ${PROFILE_DEFAULT.height}
        ${PROFILE_DEFAULT.bgColor}
        ${PROFILE_DEFAULT.borderColor}
        ${PROFILE_DEFAULT.radius}
        rounded-full
        overflow-hidden
        relative
      `}
    >
      <Image
        src={PROFILE_DEFAULT.imagePath}
        alt="profile image"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Profile;
