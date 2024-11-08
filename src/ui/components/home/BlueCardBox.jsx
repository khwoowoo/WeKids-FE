"use client";

import { useAccountInfoStore } from "@/src/stores/accountStore";
import { characterInfoMap } from "@/src/constants/common"; // 상대 경로로 불러오기
import { Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { CopyIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";

const BlueCardBox = () => {
  const { selectedAccount } = useAccountInfoStore(); // Zustand에서 selectedAccount 가져오기
  const [backgroundColorClass, setBackgroundColorClass] = useState(""); // backgroundColorClass 상태 추가
  const router = useRouter();

  useEffect(() => {
    if (selectedAccount) {
      console.log("selectedAccount.desginType: " + selectedAccount.designType);
      const accountCharacterInfo = characterInfoMap[selectedAccount.designType] || [];

      console.log("accountCharacterInfo.name " + accountCharacterInfo.name);

      const bgClass = accountCharacterInfo.colorClass
        ? `${accountCharacterInfo.colorClass}` // 예: bg-color-dalbo
        : "bg-main02"; // colorClass가 없으면 기본값을 bg-main02로 설정

      console.log("bgClass " + bgClass);

      setBackgroundColorClass(bgClass); // 상태 업데이트
    }
  }, [selectedAccount]);

  if (!selectedAccount) return <div>계좌를 선택해주세요.</div>;

  return (
    <div
      className={`${backgroundColorClass} w-[330px] h-[252px] text-white rounded-[10px] flex flex-col justify-between relative`}
    >
      {console.log("div " + backgroundColorClass)}
      <div className="text-left px-5">
        <div className="flex items-center space-x-2 mt-[25px]">
          <Text className="wooridaumB text-sm">{selectedAccount.accountNumber}</Text>
          <CopyIcon />
        </div>
        <Text className="wooridaumB text-xl mt-[32px]">{selectedAccount.name}</Text>
      </div>
      <div className="absolute right-0 top-0 ">
        <img src="/images/accountWeebeeImg.svg" alt="Mascot" />
      </div>
      <Text className="wooridaumB text-[28px] mt-[48px] text-right">
        {selectedAccount.balance.toLocaleString()} 원
      </Text>
      <div className="mt-auto">
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="flex text-white">
          <button className="flex-1 py-4 text-center border-r border-white/20 hover:bg-white/10 transition-colors" onClick={() => router.push(urlPath.TRANSACTION_HISTORY)}>
            조회
          </button>
          <button className="flex-1 py-4 text-center hover:bg-white/10 transition-colors" onClick={() => router.push(urlPath.ACCOUNT_LIST)}>
            이체
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueCardBox;
