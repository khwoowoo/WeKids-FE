import { Box, Flex, Button, Text } from "@radix-ui/themes";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const TransFilterModal = ({ onClose }) => {
    {/* <Text size="lg" weight="bold">
    조회기간
    </Text> */}
    const labels = ["1개월", "3개월", "지난달", "직접설정"];

  return (
    <Flex justify="center" align="end" className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-50">
      <Box className="w-[395px] max-w-md p-4 bg-white rounded-t-[50px]">
        <Flex justify="between" className="p-5 mb-4 text-black">
          <button onClick={onClose} className="text-2xl">✕</button>
          <Button variant="ghost" onClick={() => alert("확인")}>
            확인
          </Button>
        </Flex>
        <Flex align="center" direction="column">
            <Text size="lg" weight="bold" color="gray">조회기간</Text>
            <RadioGroup.Root defaultValue="1개월" className="flex">
            {labels.map((label, index) => (
                <RadioGroup.Item
                key={label}
                value={label}
                className={`text-black text-sm w-20 h-10 border  ${
                    index < labels.length - 1 ? "border-r-0" : ""
                } border-gray-500 flex items-center justify-center text-gray-700 data-[state=checked]:bg-gray-100 data-[state=checked]:border-black transition-colors`}
                >
                {label}
                </RadioGroup.Item>
            ))}
            </RadioGroup.Root>
        </Flex>
      </Box>
    </Flex>
  );
};
