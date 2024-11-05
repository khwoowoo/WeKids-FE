'use client'
import React, { useState, useEffect } from 'react';
import KeyPad from '../../../ui/Components/atoms/KeyPad';
import NextButton from '../../../ui/Components/atoms/Modal/NextButton';

const dummyData = [
    { name: '구자빈', account: '111-111-111', balance: 1000000, bank: '우리은행' },
    { name: '강현우', account: '222-222-222', balance: 2000000, bank: '우리은행' },
    { name: '안찬웅', account: '333-333-333', balance: 3000000, bank: '우리은행' },
    { name: '조예은', account: '444-444-444', balance: 4000000, bank: '우리은행' },
    { name: '최윤정', account: '555-555-555', balance: 5000000, bank: '우리은행' },
  ];

export default function Page() {
    const [amount, setAmount] = useState(0);
    const [selectedUser, setSelectedUser] = useState(dummyData[0]);

    const handleNumberClick = (num) => {
        if(num == '⌫'){
                const newAmount = amount.toString().slice(0, -1);
                setAmount(newAmount === '' ? 0 : parseInt(newAmount, 10));
                return newAmount;
        }
        else{
          if(parseInt(amount.toString() + num, 10) > selectedUser.balance){
            setAmount(selectedUser.balance);
            return amount;
          }
          else{
            setAmount((prevAmount) => {
              const newAmount = parseInt(prevAmount.toString() + num, 10);
              return newAmount;
            });
          }
        }
      };
      const handleSetMaxAmount = () => {
        setAmount(selectedUser.balance);
      };
      const handleAddAmount = (increment) => {
        if(amount + increment > selectedUser.balance){
          setAmount(selectedUser.balance);
        }
        else{
          setAmount((prevAmount) => prevAmount + increment);
        }
      };

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
      <div className="flex flex-col items-center flex-grow">
          <div className="flex flex-col text-center justify-center h-1/2 ">
            <div className='text-4xl font-bold'>{amount.toLocaleString()}원</div>
          </div>
          <div className="flex space-x-4 ">
          <button className="px-4 py-1 bg-gray-200 rounded" onClick={() => handleAddAmount(10000)}>
              +1만
            </button>
            <button className="px-4 py-1 bg-gray-200 rounded" onClick={() => handleAddAmount(50000)}>
              +5만
            </button>
            <button className="px-4 py-1 bg-gray-200 rounded" onClick={() => handleAddAmount(100000)}>
              +10만
            </button>
            <button className="px-4 py-1 bg-gray-200 rounded" onClick={handleSetMaxAmount}>
              전액
            </button>
          </div>
          <div className="bottom-0 fixed">
            <div className="w-[393px] mt-9">
                <KeyPad number={handleNumberClick} buttonHeight='h-14' buttonWidth='w-[393px]'/>
            </div>
                <NextButton width='w-[393px]' radius = ''/>
            </div>
        </div>
    </div>
  );
}