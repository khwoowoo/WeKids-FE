'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import KeyPad from '../../../ui/Components/atoms/KeyPad';
import NextButton from '../../../ui/Components/atoms/Modal/NextButton';
import Modal from '../../../ui/Components/atoms/Modal';
import Profile from '../../../ui/Components/atoms/Modal/Profile';
import TransferButton from '../../../ui/Components/atoms/Modal/Transferbutton';
import useTransactionStore from '../../../stores/useTransactionStore';

const dummyData = [
    { id: 1, name: '구자빈', account: '111-111-111', bank: '우리은행' },
    { id: 2, name: '강현우', account: '222-222-222', bank: '우리은행' },
    { id: 3, name: '안찬웅', account: '333-333-333', bank: '우리은행' },
    { id: 4, name: '조예은', account: '444-444-444', bank: '우리은행' },
    { id: 5, name: '최윤정', account: '555-555-555', bank: '우리은행' }, // 추후에는 더미데이터를 없애고 id 계좌 정보를 백엔드에서 조회해 오고 출력
];

const sendUser = { name: '김우리', account: '666-666-666', balance: 50000000, bank: '우리은행' } // bank 컬럼은 우선 혹시 몰라서 보류

export default function Page() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const router = useRouter();
    const { selectedAccount, transferAmount, setSelectedAccount, setTransferAmount, clearTransferData } = useTransactionStore();

    useEffect(() => {
        console.log(selectedAccount);
        if (!selectedAccount) {
            router.push('/account-list');
        }
    }, [selectedAccount]);
    

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
        if (num === '⌫') {
            const newAmount = transferAmount.toString().slice(0, -1);
            setTransferAmount(newAmount === '' ? 0 : parseInt(newAmount, 10));
        } else {
            const newTotal = parseInt(transferAmount.toString() + num, 10);
            if (newTotal > sendUser.balance) {
                setTransferAmount(sendUser.balance);
                setIsShaking(true);
            } else {
                setTransferAmount(newTotal);
            }
        }
    };

    const handleSetMaxAmount = () => {
        setTransferAmount(sendUser.balance);
    };


    const routeControll = (text) => {
        if(text == 'cancel'){
            router.push('/account-list');
            clearTransferData();
        }
        else{
            router.push('/account-list/account/done');
        }
        
    }

    const handleAddAmount = (increment) => {
        const newTotal = transferAmount + increment;
        if (newTotal > sendUser.balance) {
            setTransferAmount(sendUser.balance);
            setIsShaking(true);
        } else {
            setTransferAmount(newTotal);
        }
    };

    const handleUserChange = (e) => {
        const selectedName = e.target.value;
        const user = dummyData.find((user) => user.name === selectedName); // dummyData
        if (user) {
            setSelectedAccount(user);
        }
    };

    if (!selectedAccount) return null;
  
    return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
        <div className="flex justify-between items-center w-full p-4 top-0 absolute">
            <button className="text-lg" onClick={() => router.back()}>←</button>
            <div className="text-center">
                <div>
                    <select
                    className="bg-gray-100 cursor-pointer"
                    value={selectedAccount.name}
                    onChange={handleUserChange}
                    >
                    {dummyData.map((user, index) => ( // dummyData
                        <option key={index} value={user.name}>
                        {user.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="text-xs text-gray-500"> {"우리은행"} {selectedAccount.account}</div>
            </div>
            <button className="text-lg" onClick={() => routeControll("cancel")}>취소</button>
        </div>
        <div className="flex flex-col items-center flex-grow">
            <div className="flex flex-col text-center justify-center h-1/2 ">
                <div className={`${isShaking ? 'shake-animation': ''} text-4xl font-bold ${isShaking ? 'text-red-600' : 'text-slate-900'}`}>{transferAmount.toLocaleString()}원</div>
                <div className="text-red-600">{isShaking ? `${sendUser.balance.toLocaleString()}원 까지만 이체 가능합니다.` : ''}</div>
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
                height="47vh"
                translateY="0%"
                delete_button={true}
            >
                <div className="flex flex-col items-center mt-4">
                    <Profile />
                    <p className="text-base mt-2"><span className="font-bold text-lg">{selectedAccount.name}</span>님에게  <span className="font-bold text-lg">{transferAmount.toLocaleString()}원</span> </p>
                    <p className="text-base mt-1">이체하시겠습니까?</p>
                    <p className="text-xs mt-5 text-gray-400">받는계좌 : 우리은행 {selectedAccount.account}</p>
                </div>
                <div className="flex space-x-3 mt-7">   
                    <TransferButton text={"취소"} onClick={closeModal}/>
                    <NextButton text={"이체하기"} onClick={() => routeControll("done")} />

                </div>
            </Modal>
        </div>
    </div>
  );
}