// components/BlueBox.js
import { Text } from "@radix-ui/themes";
import Copy from "../atoms/CopyIcon";

const BlueBox = () => {
  // 예시 데이터
  const accountInfo = {
    accountNumber: "123-456-7890",
    balance: 3000000, // 잔액을 3,000,000으로 변경
    name: "강현우",
  };

  const transactions = [
    { id: 1, date: "2024-11-01", description: "편의점 결제", amount: -5000 },
    { id: 2, date: "2024-11-02", description: "월급", amount: 2000000 },
    { id: 3, date: "2024-11-03", description: "커피", amount: -4500 },
  ];

  return (
    <div className="bg-mainColor w-[330px] h-[252px] rounded-[10px] flex flex-col justify-between">
      <div className="text-white text-left mt-[35px] flex flex-col">
        <div className="flex items-center space-x-2">
          <Text className="wooridaumB">{accountInfo.accountNumber}</Text>
          <Copy />
        </div>
        <Text className="wooridaumB mt-2 ">{accountInfo.name}</Text>
        {/* 계좌 잔액 표시 */}
        <Text className="wooridaumB mt-2">
          {accountInfo.balance.toLocaleString()} 원
        </Text>
      </div>

      {/* 아래 "ㅜ" 모양 구분선 및 버튼 영역 */}
      <div className="mt-auto">
        {/* 가로선 */}
        <div className="flex items-center mt-4">
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex mt-2">
          <button className="flex-1 py-2 text-center border-r border-gray-300">
            조회
          </button>
          <button className="flex-1 py-2 text-center">이체</button>
        </div>
      </div>
    </div>
  );
};

export default BlueBox;
