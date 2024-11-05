import { Flex } from "@radix-ui/themes"
import { TransactionItem } from "./TransactionItem"

export const TransactionsView = () => {
  return (
    <Flex direction="column" className="bg-white h-[53vh]">
      <TransactionItem
        date={'10.25'}
        title={'카카오페이'}
        amount={'-1000'}
        balance={'12837182'}
        isIncome={true}
      />
    </Flex>
  )
}