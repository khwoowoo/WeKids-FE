import { create } from "zustand";

const useStore = create((set) => ({
  selectedAccount: {
    id: 1,
    accountNumber: "3333-0073-0030-03",
    balance: 300000,
    name: "강현우",
    state: "active",
    designType: "WEBEE",
  }, // 기본값 설정
  setSelectedAccount: (accountInfo) => set({ selectedAccount: accountInfo }), // 계좌 정보 업데이트 함수
}));

export default useStore;
