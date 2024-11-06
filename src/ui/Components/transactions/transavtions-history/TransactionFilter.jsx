"use client";
import { Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { TransFilterModal } from "./TransFilterModal";
import useTransFilterStore, { RangeEnum } from "@/src/stores/useTransFilterStore";
  
export const TransactionFilter = () => {
  const { range, setRange} = useTransFilterStore();
  const { type, setType } = useTransFilterStore();
  const { sortingType, setSortingType } = useTransFilterStore();
  const { search, setSearch } = useTransFilterStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box>
      <Flex 
        direction="row" 
        align="center" 
        justify="between" 
        className="bg-white h-[7vh] p-3"
      >
        <Flex>
          <Box onClick={() => alert("click")} className="pr-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.3833 12.7666C7.76123 12.7666 9.04785 12.3184 10.0938 11.5713L14.0283 15.5059C14.2109 15.6885 14.4517 15.7798 14.7007 15.7798C15.2402 15.7798 15.6304 15.3647 15.6304 14.8335C15.6304 14.5845 15.5474 14.3521 15.3647 14.1694L11.4551 10.2515C12.2769 9.17236 12.7666 7.83594 12.7666 6.3833C12.7666 2.87207 9.89453 0 6.3833 0C2.86377 0 0 2.87207 0 6.3833C0 9.89453 2.86377 12.7666 6.3833 12.7666ZM6.3833 11.3887C3.63574 11.3887 1.37793 9.12256 1.37793 6.3833C1.37793 3.64404 3.63574 1.37793 6.3833 1.37793C9.12256 1.37793 11.3887 3.64404 11.3887 6.3833C11.3887 9.12256 9.12256 11.3887 6.3833 11.3887Z" fill="#666666"/>
            </svg>
          </Box>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full placeholder-gray-400 bg-transparent border-none outline-none text-slate-500"
          />
        </Flex>
        <Box onClick={() => setIsModalOpen(true)} className="text-xs font-medium text-gray-700">
          {`${range} · ${type} · ${sortingType} ▼`}
        </Box>
      </Flex>
      {isModalOpen && (
        <TransFilterModal 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </Box>
  );
};
