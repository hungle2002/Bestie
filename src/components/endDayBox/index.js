import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../lotties/82762-lizard-running-lottie-animation.json';
import ChartBox from './chart';
/* eslint-disable max-len */
function EndDayBox () {
    const [diaryInput, setDiaryInput] = useState(0);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const handleDiary = () => {
        setDiaryInput(1);
    };

    return (
        <div className="flex flex-col pt-2 pb-8 mx-auto mt-10 justify-center max-w-4xl border  border-black rounded-xl space-y-4 gap-4">
            <div className="text-xl text-center">Congratulate for your effort today!</div>
            <div className="columns-2 px-6 flex flex-row gap-10 items-center justify-center">
                <div className="text-center h-48 flex flex-row">
                    <div className='flex flex-col'>
                        <div className="mb-auto flex h-[200px] w-full items-center justify-center">
                            <ChartBox />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">Todolist</div>
                        <div>
                            <div className='text-left text-slate-600'>
                                <div className="flex items-center gap-1">
                                    <p>- Practice Enlish listening</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p>- Reading documentation for UWC {<FontAwesomeIcon icon={faCircleCheck} className='text-green-500'/>}</p>
                                </div>

                                <div className="flex items-center gap-1"><p>- Running for 15 minutes {<FontAwesomeIcon icon={faCircleCheck} className='text-green-500'/>}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-32 w-px bg-gray-300 dark:bg" />
                <div className="text-center">
                    <div className="text-center h-48 flex flex-row">
                        <Lottie options={defaultOptions}
                            height={200}
                            width={140}
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
                <div className="basis-1/2  space-y-2 border border-black rounded-xl px-4 pt-2 pb-6 shadow-xl h-62">
                    <div className="text-base font-medium text-center border-b border-slate- pb-2 mb-2 ">Working statistic</div>
                    <div className="flex flex-row justify-center">
                        <div className="basis-1/2 flex flex-col space-y-2">
                            <div>Key board: </div>
                            <div>Click:</div>
                            <div>Short plan done:</div>
                            <div>Long plan done:</div>
                            <div>Work time:</div>
                            <div>Distract time:</div>
                        </div>
                        <div className="basis-1/4 flex flex-col space-y-2">
                            <div>20%</div>
                            <div>5%</div>
                            <div>10 hours</div>
                            <div>1000 times</div>
                            <div>300 times</div>
                            <div>1.5 hours</div>
                            {/* <div>Click: 1000</div>
                            <div>Key board: 1000</div>
                            <div>Distract time: 1.5 hours</div> */}
                        </div>
                    </div>
                </div>
                <div className="basis-1/3 space-y-4">
                    <div className="space-y-2">
                        <div className="font-medium text-lg">{<FontAwesomeIcon icon={faHandPointRight} className='mr-1'/>} Evaluate yourself </div>
                        <input type="text" className="ml-48 border rounded-2xl h-8 w-16 text-center" placeholder="On 100" />
                    </div>
                    <div className='pt-4'>
                        <div className="text-lg font-medium">{<FontAwesomeIcon icon={faFilePen} className='mr-1.5'/>}Diary</div>
                        {diaryInput === 0 && <div>
                            <div className='text-sm text-slate-700 text-center mt-1'>Vent it out, let it go - write your stress away!</div>
                            <div className='text-right'>
                                <button className="border bg-blue-500 text-white font-medium px-2 py-2 text-sm rounded-xl mt-4" onClick={handleDiary}>Write now!</button>
                            </div>
                        </div>}
                        {diaryInput === 1 && <div>
                            <textarea className='w-full h-20 border border-black rounded-xl' placeholder='  Write your day <3'/>
                            <div className='text-right'>
                                <button className="border bg-blue-500 text-white font-medium px-2 py-2 text-sm rounded-xl mt-2" onClick={handleDiary}>Submit</button>
                            </div>
                        </div>}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default EndDayBox;
