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

export const CATEGORIES = [
    "Large Cap Fund",
    "Large & Mid Cap Fund",
    "Mid Cap Fund",
    "Small Cap Fund",
    "Flex Cap Fund",
    "Blue Chip Fund",
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
    "Sectoral Thematic fund",
    "Index Fund",
];