import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Flex } from "@radix-ui/themes";
import { TransactionItem } from "./TransactionItem";

export const TransactionsView = () => {
  const [transactions, setTransactions] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    // 더 이상 로드할 데이터가 없는 경우 hasMore를 false로 설정
    if (transactions.length >= 20) { // 예시로 총 20개의 아이템이 있다고 가정
      setHasMore(false);
      return;
    }

    // 예시 데이터 추가 (실제 로드 시 API 호출을 통해 데이터를 가져올 수 있음)
    const newTransactions = [
      { date: '10.26', title: '네이버페이', amount: '-500', balance: '12837132', isIncome: false },
      { date: '10.26', title: '스타벅스', amount: '-4500', balance: '12832632', isIncome: false },
    ];

    setTransactions((prev) => [...prev, ...newTransactions]);
  };

  return (
    <Flex direction="column" className="bg-white h-[53vh] overflow-auto">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false} // 특정 컨테이너에서 스크롤을 감지하기 위해 설정
      >
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            date={transaction.date}
            title={transaction.title}
            amount={transaction.amount}
            balance={transaction.balance}
            isIncome={transaction.isIncome}
          />
        ))}
      </InfiniteScroll>
    </Flex>
  );
};
