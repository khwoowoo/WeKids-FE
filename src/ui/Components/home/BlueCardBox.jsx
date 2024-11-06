// BlueCardBox.js
import useStore from "@/src/stores/useAccountInfo";
import { Text } from "@radix-ui/themes";
import Copy from "../../../../public/icons/CopyIcon";

const BlueCardBox = () => {
  const { selectedAccount } = useStore((state) => state); // Zustand에서 selectedAccount 가져오기

  if (!selectedAccount) return <div>계좌를 선택해주세요.</div>;

  return (
    <div className="bg-mainColor w-[330px] h-[252px] text-white rounded-[10px] flex flex-col justify-between relative">
      <div className="text-left px-5">
        <div className="flex items-center space-x-2 mt-[25px]">
          <Text className="wooridaumB text-sm">
            {selectedAccount.accountNumber}
          </Text>
          <Copy />
        </div>
        <Text className="wooridaumB text-xl mt-[32px]">
          {selectedAccount.name}
        </Text>
      </div>
      <div className="absolute right-0 top-0">
        <img src="/images/account_weebee.svg" alt="Mascot" />
      </div>
      <Text className="wooridaumB text-[28px] mt-[48px] text-right">
        {selectedAccount.balance.toLocaleString()} 원
      </Text>
      <div className="mt-auto">
        <div className="w-full h-[1px] bg-white/20"></div>
        <div className="flex text-white">
          <button className="flex-1 py-4 text-center border-r border-white/20 hover:bg-white/10 transition-colors">
            조회
          </button>
          <button className="flex-1 py-4 text-center hover:bg-white/10 transition-colors">
            이체
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueCardBox;
