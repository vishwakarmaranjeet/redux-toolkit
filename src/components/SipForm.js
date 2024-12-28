import React, { useState } from 'react';

function SIPForm({ onSubmit }) {
    const [sipList, setSipList] = useState([{ category: '', amount: '' }]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...sipList];
        list[index][name] = value;
        setSipList(list);
    };

    const handleAdd = () => {
        setSipList([...sipList, { category: '', amount: '' }]);
    };

    const handleRemove = (index) => {
        const list = [...sipList];
        list.splice(index, 1);
        setSipList(list);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedData = {};
        sipList.forEach((item) => {
            if (item.category && item.amount) {
                formattedData[item.category] = parseInt(item.amount);
            }
        });
        onSubmit(formattedData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Enter SIP Amount</h2>

            {sipList.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
                    <input
                        type="text"
                        name="category"
                        placeholder="SIP Category"
                        value={item.category}
                        onChange={(e) => handleChange(index, e)}
                        required
                        className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0"
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={item.amount}
                        onChange={(e) => handleChange(index, e)}
                        required
                        className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    {sipList.length > 1 && (
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-2 sm:mt-0 sm:ml-4"
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}

            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                    type="button"
                    onClick={handleAdd}
                    className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
                >
                    Add Category
                </button>
                <button
                    type="submit"
                    className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full sm:w-auto"
                >
                    Generate Chart
                </button>
            </div>
        </form>
    );
}

export default SIPForm;
