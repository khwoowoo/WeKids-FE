import React from 'react';

export default function KeyPad({
    buttonWidth = 'w-24',
    buttonHeight = 'h-12',
    fontFamily = 'Arial, sans-serif',
    fontSize = '1rem',
}) {
    return (
        <div className="flex">
            <div className="grid grid-cols-3 bg-white">
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>1</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>2</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>3</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>4</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>5</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>6</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>7</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>8</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>9</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>00</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>0</button>
                <button className={`keypad-button ${buttonWidth} ${buttonHeight} text-center border`}>⌫</button>
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
