/* eslint-disable max-len */

import { useEffect } from 'react';

import DiscordBox from '../../components/Discord';
import LineChartBox from '../../components/lineChart';
import NotionTodo from '../../components/notionTodo';
import Plan from '../../components/plan';
import { createToast, Toast } from '../../components/toast';
;
function HomePage () {
    useEffect(() => {
        createToast('hello world', () => { console.log('callback'); });
    }, 1000);

    const dataLineChart = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Progress',
                // yAxisID: 'consumption',
                data: [70, 90, 50, 60, 30, 40, 20],
                fill: true,
                borderColor: 'rgba(0, 82, 255, 1)',
                backgroundColor: 'rgba(0, 82, 255, 0.2)',
                tension: 0.2,
                yAxisID: 'y'
            }
        ]
    };

    return (
        <div>
            <div className='px-48 flex flex-row w-full gap-12 '>
                <div className='basis-3/5 flex flex-col gap-6'>
                    <div className=' basis-6/12'>
                        <LineChartBox title={'Working Progress Self'} data={dataLineChart}/>
                    </div>
                    <div className='bg-green-300 basis-6/12'><NotionTodo/></div>
                </div>
                <div className='basis-2/5 flex flex-col gap-6 '>
                    <div className='basis-9/12 rounded-xl shadow-lg space-y-4 pt-4'>
                        <Plan/>
                    </div>
                    <div className='basis-3/12'> <DiscordBox/> </div>
                </div>
            </div>
            {/* <Toast /> */}
        </div>);
}

export default HomePage;
