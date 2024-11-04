import React, { useEffect, useState } from 'react';

export default function Modal({ isOpen, onClose, children, width = '30%', height = '70vh', translateY = '0%' }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center z-50">
            <div
                className={`bg-white rounded-t-3xl p-6 transform transition-transform duration-500 ease-in-out ${
                    isOpen ? "translate-y-0" : "translate-y-full"
                } absolute bottom-0`}
                style={{ width, height, transform: `translateY(${translateY})` }}
            >
                <div className="flex justify-between items-center mb-4">
                    
                    <button onClick={onClose} className="text-gray-500">X</button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
