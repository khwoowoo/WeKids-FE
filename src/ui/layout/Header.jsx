// components/Header.js
import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-gray-100 border-b border-gray-300">
      <Image src="/images/logoImg.svg" width={100} height={100} alt="Logo" className="w-auto h-6" />
      <div className="flex space-x-4">
        {/* 알람 아이콘 */}
        <EnvelopeClosedIcon className="w-6 h-6 cursor-pointer" />
        {/* 프로필 아이콘 */}
        <PersonIcon className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}
