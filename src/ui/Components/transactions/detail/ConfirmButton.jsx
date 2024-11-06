"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ConfirmButton = () => {
  const router = useRouter();

  const handleClickConfirm = () => {
    router.push("/transaction-history");
  };

  return (
    <button
      className="w-[400px] bg-[#2483C5] text-white flex items-center justify-center"
      onClick={handleClickConfirm}
    >
      확인
    </button>
  );
};

export default ConfirmButton;
