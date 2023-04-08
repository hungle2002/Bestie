/* eslint-disable max-len */
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
const LineChartBox = ({ title, data, opNum }) => {
    const options1 = {
        responsive: true,
        showTooltips: true,
        interaction: {
            mode: 'index',
            intersect: false
        },
        stacked: false,
        plugins: {
            title: {
                display: true
            }
        },
        scales:
    {
        y:
      {
          min: 0,
          max: 100,
          type: 'linear',
          display: true
      },
        y1: {
            type: 'linear',
            display: true,
            min: 0,
            max: 20000,
            grid: {
                drawOnChartArea: false // only want the grid lines for one axis to show up
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
    };
    const options2 = {
        responsive: true,
        showTooltips: true,
        interaction: {
            mode: 'index',
            intersect: false
        },
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
    const options = options2;
    return (
        <div className="h-96 gap-2.5">
            <h1>{title} Analytics</h1>
            <p>Realtime - last 7 days</p>
            <div className="h-96">
                <Line
                    data={data}
                    options={options} />
            </div>
        </div>
    );
};

export default LineChartBox;
