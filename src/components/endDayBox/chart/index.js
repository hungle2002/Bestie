// import Chart from 'react-apexcharts';
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);
export const data = {
    labels: ['Completed', 'Fail'],
    datasets: [
        {
            label: 'Percent',
            data: [63, 27],
            backgroundColor: [
                'rgba(0, 255, 0, 0.8)',
                'rgba(255, 0, 0, 0.8)'
            ],
            hoverColor: [
                'rgba(0, 255, 0, 1)',
                'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 1
        }
    ]
};

const ChartBox = () => {
    return <Doughnut data={data}/>;
};

export default ChartBox;
