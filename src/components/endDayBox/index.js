import Lottie from 'react-lottie';

import animationData from '../../lotties/82762-lizard-running-lottie-animation.json';
import ChartBox from './chart';
/* eslint-disable max-len */
function EndDayBox () {
    const pieChartData = [63, 37];
    const pieChartOptions = {
        labels: ['Completed', 'Failed'],
        colors: ['#55FF00', '#FFA200'],
        chart: {
            width: '50px'
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        hover: { mode: null },
        plotOptions: {
            donut: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: false
                    }
                }
            }
        },
        fill: {
            colors: ['#55FF00', '#FFA200']
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            style: {
                fontSize: '12px',
                fontFamily: undefined,
                backgroundColor: '#000000'
            }
        }
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="pt-2 pb-8 mx-auto mt-10 justify-center max-w-4xl border  border-black rounded-xl space-y-4">
            <div className="text-xl text-center">Congratulate for your effort today!</div>
            <div className="columns-2 px-6">
                <div className="text-center h-48 flex flex-row">
                    <div className='flex flex-col'>
                        <div className="mb-auto flex h-[220px] w-full items-center justify-center">
                            <ChartBox options={pieChartOptions} series={pieChartData} />
                        </div>
                        <div className="flex flex-row !justify-between rounded-2xl px-6 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-[#55FF00]" />
                                    <p className="text-sm font-normal text-gray-600 ms-1">Completed</p>
                                </div>
                                <p className="flex mt-px text-xl font-bold text-navy-700">
                                    63%
                                </p>
                            </div>

                            <div className="h-11 w-px bg-gray-300 dark:bg" />

                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-[#FFA200]" />
                                    <p className="text-sm font-normal text-gray-600 ms-1">Failed</p>
                                </div>
                                <p className="mt-px text-xl font-bold text-navy-700">
                                25%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">Todolist</div>
                        <div>
                            <div className='text-left'>
                                <div>Practice Enlish listening V</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-center h-48 flex flex-row">
                        <Lottie options={defaultOptions}
                            height={200}
                            width={150}
                        />
                        <div className="basis-2/3 flex flex-col text-left">
                            <div className="font-bold text-xl text-center">Upcoming</div>
                            <div className='text-md'>
                                <div className='text-red-500'>- Complete brainstorm for UWC app</div>
                                <div className='text-yellow-500'>- Design UWC database</div>
                                <div className='text-slate-500'>- Complete figma for UWC app</div>
                                <div className='text-slate-500'>- Assignment 3 PPL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-12 justify-center">
                <div className="basis-1/2  space-y-2 border border-black rounded-xl px-4 pt-2 pb-6 shadow-xl">
                    <div className="text-base font-medium text-center">Working statistic</div>
                    <div className="flex flex-row">
                        <div className="basis-1/2 flex flex-col">
                            <div>Short plan done: 20%</div>
                            <div>Long plan done: 5%</div>
                            <div>Work time: 10 hours</div>
                        </div>
                        <div className="basis-1/2 flex flex-col">
                            <div>Click: 1000</div>
                            <div>Key board: 1000</div>
                            <div>Distract time: 1.5 hours</div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3 space-y-4">
                    <div className="space-y-2">
                        <div className="text-base font-medium">Evaluate yourself</div>
                        <input type="text" className="border rounded-2xl w-16 text-center" placeholder="On 100" />
                    </div>
                    <div className="space-y-2">
                        <div className="text-base font-medium">Diary</div>
                        <button className="border bg-blue-500 text-white font-medium px-2 py-2 text-sm rounded-xl">Write now!</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default EndDayBox;
