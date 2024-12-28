import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
    const totalSIP = Object.values(data).reduce((acc, sip) => acc + sip, 0);
    const sipLabels = Object.keys(data);
    const sipPercentages = Object.values(data).map((sip) =>
        ((sip / totalSIP) * 100).toFixed(2)
    );

    const chartData = {
        labels: sipLabels,
        datasets: [
            {
                label: 'SIP Allocation (%)',
                data: sipPercentages,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ],
                hoverOffset: 4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    };

    return (
        <div className="mt-10 flex justify-center w-full max-w-md sm:max-w-lg mx-auto">
            <div className="w-80 h-80 sm:w-96 sm:h-96">
                <Pie data={chartData} options={options} />
            </div>
        </div>
    );
}

export default PieChart;
