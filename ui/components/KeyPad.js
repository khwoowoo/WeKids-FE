import React, { useState, useEffect } from 'react';

export default function KeyPad({
    buttonWidth = 'w-24',
    buttonHeight = 'h-12',
    fontFamily = 'WooridaumR, Arial, sans-serif',
    fontSize = '1rem',
    number = () => {}
}) {
    const [selected_number, setSelected_Number] = useState(null);

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
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>1</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>2</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>3</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>4</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>5</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>6</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>7</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>8</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>9</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>00</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>0</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`} onClick={onClick}>⌫</button>
            </div>
            <style jsx>{`
                .keypad-button {
                    font-family: ${fontFamily};
                    font-size: ${fontSize};
                    font-weight: normal;
                }
            `}</style>
        </div>
    );
}
