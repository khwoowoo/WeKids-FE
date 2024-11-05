'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import KeyPad from '../../../ui/Components/atoms/KeyPad';
import NextButton from '../../../ui/Components/atoms/Modal/NextButton';
import Modal from '../../../ui/Components/atoms/Modal';
import Profile from '../../../ui/Components/atoms/Modal/Profile';
import TransferButton from '../../../ui/Components/atoms/Modal/Transferbutton';

const dummyData = [
    { name: '구자빈', account: '111-111-111', balance: 1000000, bank: '우리은행' },
    { name: '강현우', account: '222-222-222', balance: 2000000, bank: '우리은행' },
    { name: '안찬웅', account: '333-333-333', balance: 3000000, bank: '우리은행' },
    { name: '조예은', account: '444-444-444', balance: 4000000, bank: '우리은행' },
    { name: '최윤정', account: '555-555-555', balance: 5000000, bank: '우리은행' },
];

const receive_dummyData = [
    { name: '김우리', account: '666-666-666'},
];

export default function Page() {
    const [amount, setAmount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(dummyData[0]); // TODO : 추후에 현재 유저 데이터 생길시 더미데이터 빼고 외부값 넣기
    const [receiveUser, setReceiveUser] = useState(receive_dummyData[0]); // TODO : 추후에 받는 사람 데이터 생길시 더미데이터 빼고 외부값 넣기
    const [isShaking, setIsShaking] = useState(false);
    const router = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (isShaking) {
          const timeout = setTimeout(() => {
            setIsShaking(false);
          }, 500);
          return () => clearTimeout(timeout);
        }
      }, [isShaking]);

    const handleNumberClick = (num) => {
        if(num == '⌫'){
            const newAmount = amount.toString().slice(0, -1);
            setAmount(newAmount === '' ? 0 : parseInt(newAmount, 10));
            return newAmount;
        }
        else{
            if(parseInt(amount.toString() + num, 10) > selectedUser.balance){
                setAmount(selectedUser.balance);
                setIsShaking(true);
                setTimeout(() => setIsShaking(false), 500);
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

    const routeControll = () => {
        router.push('/account-list/account/done');
    }

    const handleAddAmount = (increment) => {
        if(amount + increment > selectedUser.balance){
            setAmount(selectedUser.balance);
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
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
                <div>
                    <select
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
                <div className={`${isShaking ? 'shake-animation': ''} text-4xl font-bold ${isShaking ? 'text-red-600' : 'text-slate-900'}`}>{amount.toLocaleString()}원</div>
                <div className="text-red-600">{isShaking ? `${selectedUser.balance.toLocaleString()}원 까지만 이체 가능합니다.` : ''}</div>
            </div>
            <div className="bottom-0 fixed">
            <div className="flex space-x-4 justify-center">
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
            
                <div className="w-[393px] mt-9">
                    <KeyPad number={handleNumberClick} buttonHeight='h-14' buttonWidth='w-[393px]'/>
                </div>
                <NextButton onClick={openModal} width='w-[393px]' radius = ''/>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                width="393px"
                height="45vh"
                translateY="0%"
                delete_button={true}
            >
                <div className="flex flex-col items-center mt-4">
                    <Profile />
                    <p className="text-base mt-2"><span className="font-bold text-lg">{receiveUser.name}</span>님에게  <span className="font-bold text-lg">{amount.toLocaleString()}원</span> </p>
                    <p className="text-base mt-1">이체하시겠습니까?</p>
                    <p className="text-xs mt-5 text-gray-400">받는계좌 :  {selectedUser.bank + " " + selectedUser.account}</p>
                </div>
                <div className="flex space-x-3 mt-9">
                    <TransferButton text={"취소"} onClick={closeModal}/>
                    <NextButton text={"이체하기"} onClick={routeControll} />
                </div>
            </Modal>
        </div>
    </div>
  );
}