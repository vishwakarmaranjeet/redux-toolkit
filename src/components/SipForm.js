import React, { useState } from 'react';
import Select from 'react-select';

function SIPForm({ onSubmit }) {
    const [sipList, setSipList] = useState([{ category: '', amount: '' }]);

    const categories = [
        "Large Cap Fund",
        "Large & Mid Cap Fund",
        "Mid Cap Fund",
        "Small Cap Fund",
        "Flex Cap Fund",
        "ELSS",
        "Hybrid Aggresive Fund",
        "Hybrid Arbitrage Fund",
        "Hybrid Equity Saving Fund",
        "Hybrid Conservative Fund",
        "Hybrid Multi Asset Fund",
        "Hybrid Dynamic Asset Fund",
        "Liquid Fund",
        "Medium Duration Fund",
        "Short Duration Fund",
        "Money Market Fund",
        "Ultra Short Fund",
        "Low Duration Fund",
        "Corporate Bond Fund",
        "Value Fund",
        "Focused Fund",
        "Dividend Yield Fund",
        "Sectoral Theatic",
        "Index Fund",
    ];

    const categoryOptions = categories.map((category) => ({ value: category, label: category }));

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...sipList];
        // If it's the 'category' field, allow only alphabetic characters
        if (name === 'category') {
            // Allow only alphabetic characters
            const validValue = value.replace(/[^a-zA-Z\s\-_&]/g, "");
            list[index][name] = validValue;
        } else if (name === 'amount') {
            // Handle 'amount' field with INR symbol and formatting
            const rawValue = value.replace(/[^\d.]/g, "");
            const formattedValue = new Intl.NumberFormat().format(rawValue);
            list[index][name] = formattedValue.replace(/,/g, "");
        } else {
            list[index][name] = value;
        }
        setSipList(list);
    };

    const handleSelectChange = (index, selectedOption) => {
        const list = [...sipList];
        list[index].category = selectedOption ? selectedOption.value : '';
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
                    <div className="relative w-full sm:w-1/2">
                    <Select
                        name="category"
                        value={categoryOptions.find(option => option.value === item.category) || null}
                        onChange={(selectedOption) => handleSelectChange(index, selectedOption)}
                        options={categoryOptions}
                        placeholder="Select Category"
                        isClearable
                        className="w-full"
                    />
                    </div>
                    {/* <input
                        type="text"
                        name="category"
                        placeholder="SIP Category"
                        value={item.category}
                        onChange={(e) => handleChange(index, e)}
                        required
                        className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0"
                    /> */}
                    <input
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        value={`₹ ${new Intl.NumberFormat().format(item.amount || 0)}`}
                        onChange={(e) => handleChange(index, e)}
                        required
                        className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    {sipList.length > 1 && (
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="flex items-center justify-center space-x-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-fit sm:w-auto mt-2 sm:mt-0 sm:ml-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    )}
                </div>
            ))}

            <div className="flex flex-col sm:flex-row items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                    type="button"
                    onClick={handleAdd}
                    className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>Add Category</span>
                </button>
                <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 w-full sm:w-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                    <span>Generate Chart</span>
                </button>
            </div>
        </form>
    );
}

export default SIPForm;
