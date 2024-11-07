"use client";
import React, { useState } from "react";
import ShareButton from "@/src/ui/components/atoms/Sharebutton";
import NextButton from "@/src/ui/components/atoms/NextButton";

const Page = () => {
  const [transferData, setTransferData] = useState({
    receiverName: "최윤정",
    amount: 10000,
    accountNumber: "240910713624017",
    bankName: "하나",
    memo: "메모입력..",
  });

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* 노란색 체크 원 */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#FFD600] flex items-center justify-center mb-6">
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.55 18L3.85 12.3L5.275 10.875L9.55 15.15L18.725 5.975L20.15 7.4L9.55 18Z"
              fill="black"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* 텍스트 영역 */}
        <div className="text-center space-y-2 mb-4">
          <p className="text-[16px]">{transferData.receiverName}님에게</p>
          <p className="text-[24px] font-bold text-black">
            {transferData.amount.toLocaleString()}원 보냈어요
          </p>
          <div className="flex items-center justify-center gap-1 text-[14px] text-[#666666]">
            {transferData.bankName} {transferData.accountNumber}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 12L10 8L6 4" stroke="#666666" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* 메모 영역 */}
        <div className="bg-[#F5F5F5] px-4 py-2 rounded-full text-[14px] text-[#666666]">
          {transferData.memo}
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="px-5 pb-8">
        <div className="flex gap-1">
          <ShareButton width="w-[84px]" height="h-[62px]" />
          <NextButton
            text="확인"
            width="w-[285px]"
            height="h-[62px]"
            padding="px-[82px] py-[22px]"
            radius="rounded-[11px]"
            bgColor="bg-[#2483C5]"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
