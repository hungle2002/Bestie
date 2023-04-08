import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import Activity from './activity';
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    legend: {
        display: false,
        position: 'right'
    },
    elements: {
        arc: {
            borderWidth: 0
        }
    }
};

const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ['Completed', 'Not Completed'],
    datasets: [
        {
            data: [30, 70],
            backgroundColor: ['rgba(255, 0, 0, 0.5)',
                'rgb(60, 179, 113,0.5)'],
            hoverBackgroundColor: ['rgba(255, 0, 0, 1)',
                'rgb(60, 179, 113, 1)']
        }
    ]
};

const dataActivity = [
    {
        name: 'Do assignment1',
        state: 'Completed'
    },
    {
        name: 'Do assignment2',
        state: 'Completed'
    },
    {
        name: 'Review task',
        state: 'Incompleted'
    },
    {
        name: 'Punch ABC',
        state: 'Incompleted'
    }
];

const ChartBox = () => {
    return (
        <div className='flex max-w-sm flex-row'>
            <div className='max-w-sm'>
                <Doughnut data={data} options={options} />
            </div>
            <div className='max-w-sm'>
                {
                    dataActivity.map((item) => (
                        <Activity
                            name={item.name}
                            state={item.state}/>
                    ))
                }
            </div>
        </div>
    );
};
export default ChartBox;
