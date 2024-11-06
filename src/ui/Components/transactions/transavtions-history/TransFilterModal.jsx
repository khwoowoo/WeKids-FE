import useTransFilterStore, { RangeEnum } from "@/src/stores/useTransFilterStore";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Flex, Box, Button, Text } from "@radix-ui/themes";

export const TransFilterModal = ({ onClose }) => {
    const {range, setRange} = useTransFilterStore();

    return (
        <Flex justify="center" align="end" className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-50">
        <Box className="w-[395px] max-w-md p-4 bg-white rounded-t-[50px]">
            <Flex justify="between" className="p-5 mb-4 text-black">
            <button onClick={onClose} className="text-2xl">✕</button>
            <Button variant="ghost" onClick={onClose}>
                확인
            </Button>
            </Flex>
            
            <Flex align="center" direction="column">
            <Text className="text-sm font-bold text-gray-500">조회기간</Text>
            <RadioGroup.Root 
                value={range}
                onValueChange={(value) => setRange(value)}
                className="flex p-3"
            >
                {Object.values(RangeEnum).map((label, index) => (
                <RadioGroup.Item
                    key={label}
                    value={label}
                    className={`text-black text-sm w-20 h-10 border ${
                    index < Object.values(RangeEnum).length - 1 ? "border-r-0" : ""
                    } border-gray-500 text-gray-700 bg-gray-200 data-[state=checked]:bg-white data-[state=checked]:border-black transition-colors`}
                >
                    {label}
                </RadioGroup.Item>
                ))}
            </RadioGroup.Root>
            </Flex>

            {range === RangeEnum.CUSTOM && (
            <Flex className="mt-4">
                <Text className="text-sm text-gray-600">날짜를 직접 설정하세요</Text>
                {/* 사용자 정의 날짜 입력 필드를 여기에 추가할 수 있습니다 */}
            </Flex>
            )}
        </Box>
        </Flex>
    );
};
