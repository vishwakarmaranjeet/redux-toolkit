import React, { useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data, title }) {
    const chartRef = useRef(null);
    const totalSIP = Object.values(data).reduce((acc, sip) => acc + sip, 0);
    const sipLabels = Object.keys(data);
    const sipPercentages = Object.values(data).map((sip) =>
        ((sip / totalSIP) * 100).toFixed(2)
    );
    const chartData = {
        labels: sipLabels.map((label, index) =>
            `${label} (${sipPercentages[index]}%)`
        ),
        datasets: [
            {
                label: 'SIP Allocation (%)',
                data: sipPercentages,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#16C47F',
                    '#2A004E',
                    '#FF204E',
                    '#FF204E'
                ],
                hoverOffset: 4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true, // Change legend to dots
                    pointStyle: 'circle', // Use circle style for legend points
                    padding: 12,  // Adds spacing around legend items
                }
            }
        },
        elements: {
            arc: {
                borderWidth: 1, // Set border width to a smaller value (0 for no border)
            }
        }
    };

    const handlePrint = () => {
        const chartElement = chartRef.current;
        html2canvas(chartElement).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const pdfWidth = 100; // Set the chart width to 80mm
            let pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            // Calculate the x position to center the image
            const pdfPageWidth = 210; // A4 page width in mm
            const leftMargin = (pdfPageWidth - pdfWidth) / 2;

            // Adjust the height if it exceeds the A4 page height
            const maxHeight = 297; // A4 height in mm
            if (pdfHeight > maxHeight) {
                pdfHeight = maxHeight;
            }

            // Title positioning (add more space from the top)
            const titleTopMargin = 40; // Add more space from the top
            const titleText = title || "SIP Allocation Chart";
            pdf.setFontSize(16);
            pdf.text(titleText, pdfPageWidth / 2, titleTopMargin, { align: 'center' });

            // Image positioning (space below the title)
            const imageTopMargin = titleTopMargin + 10; // Add some space below the title
            pdf.addImage(imgData, 'PNG', leftMargin, imageTopMargin, pdfWidth, pdfHeight);

            // Save the PDF
            pdf.save('sip_allocation.pdf');
        });
    };

    return (
        <div className="mt-0 sm:mt-5 flex flex-col items-center w-full max-w-md sm:max-w-lg mx-auto">
            <div ref={chartRef} className="w-60 h-60 sm:w-80 sm:h-80">
                {totalSIP > 0 && <Pie data={chartData} options={options} />}
            </div>
            {totalSIP > 0 && (
                <button
                    type="button"
                    onClick={handlePrint}
                    className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-500 text-white rounded-full p-3 shadow-lg flex items-center justify-center w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </button>
            )
            }
        </div >
    );
}

export default PieChart;
