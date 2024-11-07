"use client";
import { Box, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, GearIcon } from "@radix-ui/react-icons";

export default function TopBar({ name, balance, accountNumber }) {
  const router = useRouter();

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("클립보드에 복사되었습니다!"))
      .catch((err) => console.error("복사 실패:", err));
  };

  const handleBackClick = () => {
    // window.history.back();
    router.back();
  };

  const handleSettingsClick = () => {
    alert("설정 버튼 클릭됨");
  };

  return (
    <Flex align="center" justify="between" direction="column" className="bg-main02 h-[40vh]">
      <Flex align="center" justify="between" direction="row" className="w-full pt-8 pl-3 pr-3">
        <Box onClick={handleBackClick}>
          <ArrowLeftIcon className="w-5 h-5 text-white" />
        </Box>
        <h1>{name}의 통장</h1>
        <Box onClick={handleSettingsClick}>
          <GearIcon className="w-5 h-5 text-white" />
        </Box>
      </Flex>
      <Flex direction="column" align="center">
        <p
          className="text-sm text-gray-300 cursor-pointer"
          onClick={() => copyToClipboard(accountNumber)}
          title="클릭하여 복사"
        >
          {accountNumber}
        </p>
        <h2 className="text-3xl font-bold">{Number(balance).toLocaleString()}원</h2>
      </Flex>
      <Flex justify="between" direction="row" className="gap-3 m-8 mt-4">
        <button onClick={() => {}} className="py-3 text-white rounded-lg bg-black/10 px-9">
          이체하기
        </button>
        <button onClick={() => {}} className="py-3 text-white rounded-lg bg-black/10 px-9">
          가져오기
        </button>
      </Flex>
    </Flex>
  );
}
