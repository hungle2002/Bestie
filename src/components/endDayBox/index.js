import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck, faCircleXmark, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import TimeTable from '../animatedElements/TimeTable';
import ChartBox from './chart';
/* eslint-disable max-len */
function EndDayBox () {
    const [diaryInput, setDiaryInput] = useState(0);
    const [evalInput, setEvalInput] = useState('');
    const [evalFocus, setEvalFocus] = useState(false);
    const handleDiary = () => {
        setDiaryInput(1);
    };
    const handleFocus = () => {
        setEvalFocus((value) => !value);
    };
    const handelInput = ({ target }) => {
        setEvalInput((target.value).toString());
    };
    return (
        <div className="flex flex-col pt-2 justify-center max-w-4xl border border-zinc-400 bg-white rounded-xl text-zinc-900 opacity-100">
            <div className="text-xl text-center">Review your day with Bestie</div>
            <div className="flex flex-col gap-6 p-10">
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col justify-start gap-4 ">
                        <div className='px-4 pb-4  rounded-[5px]'>
                            <div className='flex flex-row justify-between '>
                                <div className="text-lg font-medium">{<FontAwesomeIcon icon={faFilePen} className='mr-1.5'/>}Diary</div>
                                <div className='text-sm text-slate-700 text-center mt-1'>Vent it out, let it go - write your stress away!</div>
                            </div>
                            <div>
                                {diaryInput === 0 && <div className='text-right'>
                                    <button className="border bg-blue-500 text-white font-medium px-2 py-2 text-sm rounded-xl mt-4" onClick={handleDiary}>Write now!</button>
                                </div>
                                }
                                {diaryInput === 1 && <div>
                                    <textarea className='w-full h-20 border border-black rounded-xl p-[15px]' placeholder='Write your day <3'/>
                                    <div className='text-right'>
                                        <button className="border bg-blue-500 text-white font-medium px-2 py-2 text-sm rounded-xl mt-2" onClick={handleDiary}>Submit</button>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold"> Tasks </h1>
                        <div className="flex flex-row">
                            <div className='flex flex-col'>
                                <div className="flex h-[200px] w-[200px] items-center justify-center">
                                    <ChartBox />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center gap-4 text-left text-slate-600'>
                                <p>{<FontAwesomeIcon icon={faCircleXmark} className='text-red-500 mr-2'/>}
                                    Practice Enlish listening
                                </p>
                                <p>
                                    {<FontAwesomeIcon icon={faCircleCheck} className='text-green-500 mr-2'/>}
                                     Reading documentation for UWC
                                </p>
                                <p>
                                    {<FontAwesomeIcon icon={faCircleCheck} className='text-green-500 mr-2'/>}
                                     Running for 15 minutes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-40 w-px bg-gray-300 dark:bg" />
                    <div className="text-left">
                        <div className="relative mb-3 w-[200px] border" data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-[50px]"
                                placeholder="Default input"
                                value={evalInput}
                                onChange={handelInput}
                                onFocus={handleFocus}
                                onBlur={() => { setEvalInput(''); handleFocus(); }}
                            >
                            </input>
                            {evalFocus && <div className='absolute right-0 top-[50%] translate-y-[-50%] translate-x-[-10px] h-full flex justify-center items-center text-[50px]'>/10</div>}
                            <label
                                // htmlFor="exampleFormControlInpu3"
                                className="bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-slate-700 text-lg font-medium transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >Evaluate yourself
                            </label>
                        </div>

                    </div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold"> Working statistic </h1>
                        <div className="ml-10 flex flex-row gap-14">
                            <div className="flex flex-col space-y-2">
                                <div>Woring time:</div>
                                <div>Distract time:</div>
                                <div>Typings: </div>
                                <div>Clicks:</div>
                                <div>Opened apps:</div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div>7 hours
                                    <span className="ml-4  border-[1.2px] text-green-600 bg-green-100 p-1 rounded-3xl w-fit text-sm">↗ 10%</span>
                                </div>
                                <div>1.5 hours
                                    <span className="ml-4 border-[1.2px] text-red-600 bg-red-100 p-1 rounded-3xl w-fit text-sm">↙ 6%</span>
                                </div>
                                <div>1230 words 20%
                                    <span className="ml-4  border-[1.2px] text-green-600 bg-green-100 p-1 rounded-3xl w-fit text-sm">↗ 10%</span>
                                </div>
                                <div>400 clicks 5%
                                    <span className="ml-4  border-[1.2px] text-green-600 bg-green-100 p-1 rounded-3xl w-fit text-sm">↗ 10%</span>
                                </div>
                                <div>12 apps
                                    <span className="ml-4  border-[1.2px] text-green-600 bg-green-100 p-1 rounded-3xl w-fit text-sm">↗ 10%</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center flex flex-row">
                            <TimeTable height={360} width={360} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
export default EndDayBox;
