"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { urlPath } from "@/src/constants/common";

const ConfirmButton = () => {
  const router = useRouter();

  const handleClickConfirm = () => {
    router.push(urlPath.TRANSACTION_HISTORY);
  };

  return (
    <button
      className="w-[400px] bg-main02 text-white flex items-center justify-center"
      onClick={handleClickConfirm}
    >
      확인
    </button>
  );
};

export default ConfirmButton;
