/* eslint-disable max-len */
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DiaryTimeLine from '../../components/diaryTimeLine';
import LineChartBox from '../../components/lineChart';
import NotionTodo from '../../components/notionTodo';
function HomePage () {
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

    const typeData = ['Bestie project', 'Family', 'Social skills'];
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
                    <div className='basis-9/12 rounded-xl shadow-xl space-y-4 pt-4'>
                        <div className='text-center w-full flex flex-row justify-center items-center space-x-4'>
                            <FontAwesomeIcon icon={faHandPointRight} className='h-12 w-12'/>
                            <div className='bg-indigo-700 w-fit border p-4 rounded-xl '>
                                <h1 className='text-2xl text-white font-semibold'>
                                Graduate in 2024!</h1>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-3/4 h-full basis-2/3 -left-8'>
                                <DiaryTimeLine/>
                            </div>
                            <div className='bg-white z-10  pt-16'>
                                {typeData.map((e, index) =>
                                    <p key={index}>{e}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='bg-green-300 basis-3/12'>Discord</div>
                </div>
            </div>
        </div>);
}

export default HomePage;
