'use client'
import React, { useState, useEffect } from 'react';
const dummyData = [
    { name: '구자빈', account: '111-111-111', balance: 1000000, bank: '우리은행' },
    { name: '강현우', account: '222-222-222', balance: 2000000, bank: '우리은행' },
    { name: '안찬웅', account: '333-333-333', balance: 3000000, bank: '우리은행' },
    { name: '조예은', account: '444-444-444', balance: 4000000, bank: '우리은행' },
    { name: '최윤정', account: '555-555-555', balance: 5000000, bank: '우리은행' },
  ];

export default function Page() {

    const [selectedUser, setSelectedUser] = useState(dummyData[0]);

    const handleUserChange = (e) => {
        const selectedName = e.target.value;
        const user = dummyData.find((user) => user.name === selectedName);
        setSelectedUser(user);
      };
  
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
        <div className="flex justify-between items-center w-full p-4 top-0 absolute">
        <button className="text-lg">←</button>
        <div className="text-center">
          <div><select
              className="bg-gray-100 cursor-pointer"
              value={selectedUser.name}
              onChange={handleUserChange}
            >
              {dummyData.map((user, index) => (
                <option key={index} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="text-xs text-gray-500"> {selectedUser.bank + " " +  selectedUser.account}</div>
        </div>
        <button className="text-lg">취소</button>
      </div>
       
    </div>
  );
}