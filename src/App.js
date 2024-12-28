import React, { useState } from 'react';
// import Counter from './counter/Counter';
// import User from "./User/User";
// import FilterableProductTable from './ProductFilter/FilterableProductTable';
import SIPForm from './components/SipForm';
import PieChart from './components/PieChart';
import NavHeader from './components/NavHeader';

// const PRODUCTS = [
//   { category: "Fruits", price: "$3", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$2", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
// ];

function App() {
  const [sipData, setSipData] = useState(null);

  const handleSIPSubmit = (data) => {
    setSipData(data);
  };
  // Calculate total SIP
  const totalSIP = sipData ? Object.values(sipData).reduce((acc, sip) => acc + sip, 0) : 0;
  return (
    <>
      <NavHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* SIP Form */}
          <div className="flex-1 sm:w-1/2">
            <SIPForm onSubmit={handleSIPSubmit} />
          </div>
          <div className="flex-1 sm:w-1/2">
            {sipData && (
              <>
                <div className="mb-4">
                  {totalSIP > 0 &&
                    <h3 className="text-sm font-semibold text-gray-700 text-center">
                      Total SIP: {`₹ ${new Intl.NumberFormat().format(totalSIP || 0)}`}
                    </h3>
                  }
                </div>
                <PieChart data={sipData} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
