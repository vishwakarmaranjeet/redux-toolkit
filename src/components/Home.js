import React, { useState } from "react";
import SIPForm from './SipForm';
import PieChart from './PieChart';

const Home = () => {
    const [sipData, setSipData] = useState(null);
    const handleSIPSubmit = (data) => {
        setSipData(data);
    };
    const totalSIP = sipData ? Object.values(sipData).reduce((acc, sip) => acc + sip, 0) : 0;
    return (
        <div className="container mx-auto md:px-5 md:py-4">
            <div className="flex flex-col sm:flex-row gap-8">
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
    )
};

export default Home;