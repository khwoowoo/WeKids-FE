import React from "react";
import Modal from "@/src/ui/components/atoms/Modal";
import Profile from "@/src/ui/components/atoms/Profile";
import TransferButton from "@/src/ui/components/atoms/Transferbutton";
import NextButton from "@/src/ui/components/atoms/NextButton";
import { useRouter } from "next/navigation";
import {urlPath} from "@/src/constants/common";

const TransferModal = ({
  isModalOpen,
  closeModal,
  selectedAccount,
  transferAmount,
}) => {
  const router = useRouter();
  return (
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
      <p className="text-base mt-2">
        <span className="font-bold text-lg">{selectedAccount.name}</span>님에게
        <span className="font-bold text-lg">{transferAmount.toLocaleString()}원</span>
      </p>
      <p className="text-base mt-1">이체하시겠습니까?</p>
      <p className="text-xs mt-5 text-gray-400">받는계좌 : 우리은행 {selectedAccount.account}</p>
    </div>
    <div className="flex space-x-3 mt-7">
      <TransferButton text={"취소"} onClick={closeModal} />
      <NextButton text={"이체하기"} onClick={() => router.push(urlPath.DONE)} />
    </div>
  </Modal>
  )
};

export default TransferModal;
