import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DiaryTimeLine from '../diaryTimeLine';

function Plan () {
    const typeData = ['Bestie project', 'Family', 'Social skills'];

    return (<div>
        <div className='text-center w-full flex flex-row justify-center items-center space-x-4'>
            <FontAwesomeIcon icon={faHandPointRight} className='h-12 w-12'/>
            <div className='bg-indigo-700 w-fit border p-4 rounded-xl '>
                <h1 className='text-2xl text-white font-semibold'>
                                Graduate in 2024!</h1>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='w-3/4 h-full basis-2/3 -left-8'>
                <DiaryTimeLine w={420} h = {540}/>
            </div>
            <div className='bg-white z-10  pt-16'>
                {typeData.map((e, index) =>
                    <p key={index}>{e}</p>
                )}
            </div>
        </div>
    </div>);
}

export default Plan;
