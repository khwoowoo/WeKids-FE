import { Text } from "@radix-ui/themes";
import Copy from "../../../../public/icons/CopyIcon";

const BlueBox = () => {
  const accountInfo = {
    accountNumber: "3333-0073-0030-03",
    balance: 300000,
    name: "강현우",
    state: "active",
    designType: "WEBEE",
  };

  return (
    <div className="bg-mainColor w-[330px] h-[252px] text-white rounded-[10px] flex flex-col justify-between relative">
      <div className="text-left px-5">
        {/* 계좌번호 영역 */}
        <div className="flex items-center space-x-2 mt-[25px]">
          <Text className="wooridaumB text-sm">
            {accountInfo.accountNumber}
          </Text>
          <Copy />
        </div>

        {/* 이름 영역 */}
        <Text className="wooridaumB text-xl mt-[32px]">{accountInfo.name}</Text>
      </div>

      {/* 마스코트 이미지 */}
      <div className="absolute right-0 top-0">
        <img src="/images/account_weebee.svg" alt="Mascot" />
      </div>

      {/* 잔액 영역 - 마스코트 이미지 아래에 배치 */}
      <Text className="wooridaumB text-[28px] mt-[48px] text-center">
        {accountInfo.balance.toLocaleString()} 원
      </Text>

      {/* 하단 버튼 영역 */}
      <div className="mt-auto">
        {/* 구분선 */}
        <div className="w-full h-[1px] bg-white/20"></div>

        {/* 버튼 영역 */}
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

export default BlueBox;
