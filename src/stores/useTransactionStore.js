import { create } from 'zustand';
const useTransactionStore = create((set) => ({
    selectedAccount: null,
    transferAmount: 0,
    setSelectedAccount: (account) => set({ selectedAccount: account }),
    setTransferAmount: (amount) => set({ transferAmount: amount }),
    clearTransferData: () => set({ selectedAccount: null, transferAmount: 0}),
  }));
  export default useTransactionStore;