/* eslint-disable max-len */
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    TimeScale,
    Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, TimeScale, Title,
    Legend);
const LineChartBox = ({ title, data }) => {
    const option = {
        responsive: true,
        showTooltips: true,
        interaction: {
            mode: 'index',
            intersect: false
        },
        maintainAspectRatio: false,
        stacked: false,
        scales:
    {
        y:
      {
          type: 'linear',
          display: true
      },
        x: {
            grid: {
                display: false
            }
        }
    }
    };
    const options = option;
    return (
        <div className="flex flex-col h-full gap-4">
            <h1 className='text-2xl'>{title} Evaluate</h1>
            <p className='text-gray-500 gap-4 flex items-center text-sm'>Last 7 days {<FontAwesomeIcon icon={faClock} className='text-gray-500'/>}</p>
            <div className="flex h-80 items-center justify-center p-3">
                <Line
                    data={data}
                    options={options} />
            </div>
        </div>
    );
};

export default LineChartBox;
