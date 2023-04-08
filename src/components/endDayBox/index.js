// import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck, faCircleXmark, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Lottie from 'react-lottie';

/* eslint-disable max-len */
import animationData from '../../lotties/writing.json';
import TimeTable from '../animatedElements/TimeTable';
import ChartBox from './chart';

function EndDayBox () {
    const [diaryInput, setDiaryInput] = useState(0);
    const [evalInput, setEvalInput] = useState('');
    const [evalFocus, setEvalFocus] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const handleFocus = () => {
        setEvalFocus((value) => !value);
    };
    const handelInput = ({ target }) => {
        setEvalInput((target.value).toString());
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    type: 'spring',
                    damping: 10,
                    stiffness: 100
                }}
                exit={{ y: -400, opacity: 0 }}
                className="flex flex-col pt-2 justify-center border border-zinc-400 bg-white rounded-xl text-zinc-900x"
            >
                <AnimatePresence>
                    {showModal
                        ? (
                            <>
                                <motion.div
                                    initial={{ y: -400, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        type: 'spring',
                                        damping: 10,
                                        stiffness: 100
                                    }}
                                    exit={{ y: -400, opacity: 0, transition: { duration: 0.2 } }}
                                    onClick={(e) => {
                                        if (e.currentTarget === e.target) {
                                            setShowModal(false);
                                        }
                                    }}
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto max-w-3xl min-w-[60%]">
                                        {/* content */}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/* header */}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-zinc-700">
                                                <h3 className="text-3xl font-semibold">
                                            Tell me your feeling bestie
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/* body */}
                                            <div className="relative p-6 flex flex-row justify-between items-center w-full h-[500px] gap-[30px]">
                                                {/* <div className='flex-1 h-full'>
                                            <input
                                                className='w-full h-full peer block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem]  outline-none transition-all focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 '
                                                type="text"
                                            />
                                        </div> */}
                                                <div className="relative flex-1 mb-3 w-[200px] border h-full" data-te-input-wrapper-init>
                                                    <textarea
                                                        type="textarea"
                                                        className="h-full w-full rounded-[15px] bg-transparent px-[20px] py-[30px] outline-none resize-none border-none text-[20px]"
                                                    >
                                                    </textarea>

                                                </div>
                                                <div className='w-[2px] h-full bg-black/70'></div>
                                                <div>
                                                    <Lottie options={defaultOptions}
                                                        height={400}
                                                        width={500}
                                                    />
                                                </div>
                                            </div>
                                            {/* footer */}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                Close
                                                </button>
                                                <button
                                                    className="bg-black/70 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                Done
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <div onClick={() => { setShowModal(false); }} className="opacity-25 fixed inset-0 z-[42] bg-black"></div>
                            </>
                        )
                        : null
                    }
                </AnimatePresence>

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
                                        <button className="border bg-blue-500 text-white font-medium px-2 py-2 text-sm rounded-xl mt-4" onClick={() => setShowModal(true)}>Write now!</button>
                                    </div>
                                    }
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
                                {evalFocus && <div className='absolute right-0 top-[50%] translate-y-[-50%] translate-x-[-10px] h-full flex justify-center items-center text-[50px] text-zinc-600'>/10</div>}
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
            </motion.div>
        </AnimatePresence>
    );
}
export default EndDayBox;
