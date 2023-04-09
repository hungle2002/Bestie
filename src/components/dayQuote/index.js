/* eslint-disable react/no-unescaped-entities */
import { Transition } from '@headlessui/react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import { AppContext } from '../../App';
import animationData from '../../lotties/quote.json';
/* eslint-disable max-len */
function Quote () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const appContext = useContext(AppContext);
    let start = appContext.data.scenario;
    let mood = appContext.data.mood;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        const timer = setTimeout(() => {
            start = appContext.data.scenario;
            mood = appContext.data.mood;
            setOpen(start === 'start');
        }, 1000);
        return () => clearTimeout(timer);
    };
    useEffect(() => {
        handleOpen();
    }, [appContext.data]);
    return (<div className="flex flex-col items-center py-16">
        <div className="h-32 w-32">
            <Transition
                as={Fragment}
                show={open}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
            >
                <div className='fixed top-0 left-0 z-10'>
                    <div className="h-screen w-screen bg-black opacity-50 z-10"></div>
                    <div className='absolute top-0 left-0 flex justify-center items-center h-screen w-screen z-20' >
                        <div className="max-w-4xl border border-gray-300 rounded-lg p-10 shadow-xl bg-white">
                            <div className="flex flex-row ">
                                <div className="basis-2/3 mt-10">
                                    <h1 className="text-xl text-slate-400 font-medium">What's the quote today ?</h1>
                                    <h1 className='font-sans text-3xl mt-6 italic text-zinc-500'>"{mood === 'normal' ? 'Success is not final, failure is not fatal: it is the courage to continue that counts.' : 'I know you are having the difficult time. What make you upset :(. Can you share it with me?'}"</h1>
                                    <p className='text-lg text-right mt-2'>-Winston Churchill-</p>
                                </div>
                                <div className="basis-1/3">
                                    <Lottie options={defaultOptions}
                                        height={300}
                                        width={300}
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={() => { setOpen(false); }}
                            >
                      Got it, thanks!
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>

    </div>);
}

export default Quote;
