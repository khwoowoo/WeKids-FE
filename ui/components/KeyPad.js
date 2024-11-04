import React, { useState, useEffect } from 'react';

export default function KeyPad({
    buttonWidth = 'w-24',
    buttonHeight = 'h-12',
    fontFamily = 'WooridaumR, Arial, sans-serif',
    fontSize = '1rem',
    number = () => {}
}) {
    const [selected_number, setSelected_Number] = useState(null);
    const buttons = [
        '1', '2', '3', 
        '4', '5', '6', 
        '7', '8', '9', 
        '00', '0', '⌫'
    ];

    useEffect(() => {
        number(selected_number);
    }, [selected_number]);

    const onClick = (e) => {
        const value = e.currentTarget.innerText;
        setSelected_Number(value);
    };

    return (
        <div className="flex">
            <div className="grid grid-cols-3 bg-white">
            {buttons.map((button, index) => (
                <button 
                    key={index}
                    className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} 
                    onClick={onClick}
                >
                    {button}
                </button>
            ))}
            </div>
            <style jsx>{`
                .keypad-button {
                    font-family: ${fontFamily};
                    font-size: ${fontSize};
                    font-weight: normal;
                }
            `}
            </style>
        </div>
    );
}
