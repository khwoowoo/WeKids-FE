const { create } = require("zustand");

export const RangeEnum = {
    ONE_MONTH: "1개월",
    THREE_MONTHS: "3개월",
    LAST_MONTH: "지난달",
    CUSTOM: "직접설정",
  };


const useTransFilterStore = create((set) => ({
    range: RangeEnum.ONE_MONTH,
    setRange: (newRange) => set({ range: newRange }),
}));
  
export default useTransFilterStore;