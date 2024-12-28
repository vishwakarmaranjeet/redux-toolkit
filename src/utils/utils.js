export const calculateSIPPercentages = (sipDetails)=> {
    const totalSIP = Object.values(sipDetails).reduce((acc, sip) =>  acc + sip, 0);

    for(const [sipType, amount] of Object.entries(sipDetails)){
        const percentage = (amount / totalSIP) * 100;
        console.log(`${sipType}: ${percentage.toFixed(2)}%`)
    }
    console.log(`Total Sip amount: ${totalSIP}`);
}

export const SIP_DETAILS = {
    "Flexicap": 15000,
    "Smallcap": 15000,
    "Bluechip": 10000,
    "Large/Midcap": 10000,
    "Midcap": 10000,
    "ELSS": 5000
};