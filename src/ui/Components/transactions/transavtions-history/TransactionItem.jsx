import { Box, Flex } from "@radix-ui/themes";

export const TransactionItem = ({ date, title, amount, balance, isIncome }) => {
  return (
    <Box className="w-full border-t border-gray-200">
        <Flex 
        direction="row" 
        justify="between" 
        className="p-5 text-black"
        >
        <Flex direction="row">
            <p className="pr-5 text-sm text-gray-500">{date}</p>
            <p>{title}</p>
        </Flex>
        <Box className="text-right">
            <p className={isIncome ? "text-blue-500" : "text-black"}>
            {Number(amount).toLocaleString()}원
            </p>
            <p className="text-sm text-gray-500">
            {Number(balance).toLocaleString()}원
            </p>
        </Box>
        </Flex>
    </Box>

  );
};
