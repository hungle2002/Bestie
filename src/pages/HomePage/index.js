/* eslint-disable max-len */

import { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../App';
import Calendar from '../../components/calendar';
import Quote from '../../components/dayQuote';
import DiscordBox from '../../components/Discord';
import EndDayBox from '../../components/endDayBox';
import LineChartBox from '../../components/lineChart';
import NotionTodo from '../../components/notionTodo';
import Plan from '../../components/plan';
import { createToast, Toast } from '../../components/toast';
;

function HomePage () {
    // useEffect(() => {
    //     createToast('hello world', () => { console.log('callback'); });
    // }, 1000);

    const appContext = useContext(AppContext);
    const evalData = appContext.evalMarks;
    const dataLineChart = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Progress',
                // yAxisID: 'consumption',
                data: evalData,
                fill: true,
                borderColor: 'rgba(0, 82, 255, 1)',
                backgroundColor: 'rgba(0, 82, 255, 0.2)',
                tension: 0.2,
                yAxisID: 'y'
            }
        ]
    };
    let start = appContext.data.scenario;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        const timer = setTimeout(() => {
            start = appContext.data.scenario;
            if (start) {
                setOpen(start === 'end');
            }
        }, 1200);
        return () => clearTimeout(timer);
    };
    useEffect(() => {
        handleOpen();
    }, [appContext.data]);

    return (
        <div>
            <div className='px-48 flex flex-row w-full gap-12 '>
                <div className='basis-3/5 flex flex-col'>
                    <div className=' basis-6/12'>
                        <LineChartBox title={'Working Progress Self'} data={dataLineChart}/>
                    </div>
                    <div className=' basis-6/12'><Calendar/></div>
                    <div className=' basis-6/12'><NotionTodo/></div>
                </div>
                <div className='basis-2/5 flex flex-col gap-6 '>
                    <div className='basis-9/12 rounded-xl shadow-lg space-y-4 pt-4'>
                        <Plan/>
                    </div>
                    <div className='basis-3/12'> <DiscordBox/> </div>
                </div>
            </div>
            {/* <Toast /> */}
            <Quote/>
            {open &&
            <>
                <div
                    // eslint-disable-next-line max-len
                    className="fixed z-40 left-0 top-0 w-screen h-screen bg-zinc-100 opacity-50 cursor-pointer"
                ></div>
                <div
                    // eslint-disable-next-line max-len
                    className="fixed left-0 top-0 z-50 w-screen h-screen flex justify-center items-center"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setOpen(false);
                        }
                    }}
                >
                    <EndDayBox></EndDayBox>
                </div>
            </>
            }
        </div>);
}

export default HomePage;
