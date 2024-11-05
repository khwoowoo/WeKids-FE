'use client';

import React, { useState, useEffect } from 'react';
import TransactionList from "@/src/ui/Components/atoms/TransactionList";

const dummyData = [
  { id: 1, name: '안찬웅', bank: '우리은행', account: '1002-21-123456' },
  { id: 2, name: '구자빈', bank: '우리은행', account: '1002-21-123456' },
  { id: 3, name: '최윤정', bank: '우리은행', account: '1002-21-123456' },
  { id: 4, name: '조예은', bank: '우리은행', account: '1002-21-123456' },
];

export default function Page() {
  const [selectedId, setSelectedId] = useState(null);
  

  const handleSelect = (id) => {
    setSelectedId(id);
    
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg h-screen">
      <div className="flex justify-between p-4">
        <h1 className="text-lg font-bold">이체</h1>
        <button className="text-gray-500">닫기</button>
      </div>
      
      <div>
        {dummyData.map((user) => (
          <TransactionList // 추후에 사진을 넣어야함
            key={user.id}
            name={user.name}
            account={user.account}
            bank={user.bank}
            isSelected={user.id === selectedId}
            onClick={() => handleSelect(user.id)}
          />
        ))}
      </div>
        
      
    </div>
  );
}