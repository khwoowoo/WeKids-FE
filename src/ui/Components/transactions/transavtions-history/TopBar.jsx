"use client";
import { Flex } from "@radix-ui/themes";


function TopBar({ name, balance, accountNumber }) {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("클립보드에 복사되었습니다!"))
      .catch((err) => console.error("복사 실패:", err));
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleSettingsClick = () => {
    alert("설정 버튼 클릭됨");
  };

  return (
    <Flex 
      align="center" 
      justify="between"
      direction="column" 
      className="bg-[#2483C5] h-[40vh]"
    >
      <Flex align="center" justify="between" direction="row" className="w-full pt-8 pl-3 pr-3">
        <svg 
          width="31" 
          height="31" 
          viewBox="0 0 31 31" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleBackClick} // 뒤로 가기 클릭 핸들러 추가
          className="cursor-pointer" // 클릭 가능한 느낌을 주기 위해 커서 스타일 추가
        >
          <path d="M5.16666 15.5L25.8333 15.5M5.16666 15.5L12.9167 7.75M5.16666 15.5L12.9167 23.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1>{name}의 통장</h1>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleSettingsClick} 
          className="cursor-pointer" 
        >
          <path d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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
      <Flex justify="between" direction="row" className="gap-3 mt-4 m-8">
        <button onClick={()=>{}} className="bg-black/10 text-white py-3 px-9 rounded-lg">이체하기</button>
        <button onClick={()=>{}} className="bg-black/10 text-white py-3 px-9 rounded-lg">가져오기</button>
      </Flex>
    </Flex>
  );
}

export default TopBar;
