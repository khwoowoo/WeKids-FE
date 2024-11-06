const { create } = require("zustand");

export const RangeEnum = {
    ONE_MONTH: "1개월",
    THREE_MONTHS: "3개월",
    LAST_MONTH: "지난달",
    CUSTOM: "직접설정",
};

export const TpyeEnum = {
    ALL: "전체",
    DEPOSIT: "입금만",
    WITHDRAWAL: "출력만",
};

const today = new Date();

const useTransFilterStore = create((set) => ({
    range: RangeEnum.ONE_MONTH,
    setRange: (newRange) => set({ range: newRange }),

    startDate: today,
    endDate: today,
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),

    type: TpyeEnum.ALL,
    setType: (newType) => set({ type: newType }),

    resetFilter: () => set({ range: RangeEnum.ONE_MONTH, Type: TpyeEnum.ALL,startDate: today, endDate: today }),
}));
  
export default useTransFilterStore;