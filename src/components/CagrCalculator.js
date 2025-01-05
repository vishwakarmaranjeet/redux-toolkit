import React, { useState } from 'react';

const CAGRCalculator = () => {
    const [initialValue, setInitialValue] = useState('');
    const [finalValue, setFinalValue] = useState('');
    const [years, setYears] = useState('');
    const [cagr, setCagr] = useState(null);
    const [absoluteReturn, setAbsoluteReturn] = useState(null);

    const calculateCAGR = () => {
        if (initialValue && finalValue && years) {
            const cagrValue = Math.pow(finalValue / initialValue, 1 / years) - 1;
            setCagr((cagrValue * 100).toFixed(2));
            const absReturn = ((finalValue - initialValue) / initialValue) * 100;
            setAbsoluteReturn(absReturn.toFixed(2));
        }
    };

    // Check if all fields are filled to enable the button
    const isButtonDisabled = !initialValue || !finalValue || !years;

    return (
        <div className="max-w-md mx-auto mt-4 sm:mt-4 p-6 rounded-lg bg-white">
            <h1 className="text-2xl font-bold text-center mb-6">Calculate Return</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Initial Value:</label>
                <input
                    type="number"
                    value={initialValue}
                    onChange={(e) => setInitialValue(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Final Value:</label>
                <input
                    type="number"
                    value={finalValue}
                    onChange={(e) => setFinalValue(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Number of Years:</label>
                <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <button
                onClick={calculateCAGR}
                disabled={isButtonDisabled}  // Disable the button when inputs are empty
                className={`w-full py-2 px-4 rounded-md ${isButtonDisabled ? 'bg-blue-500 cursor-not-allowed text-white opacity-70' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
                Calculate
            </button>

            {cagr !== null && (
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold">CAGR: {cagr}%</h2>
                    <h2 className="text-xl font-semibold mt-2">Absolute Return: {absoluteReturn}%</h2>
                </div>
            )}
        </div>
    );
};

export default CAGRCalculator;
