/* eslint-disable multiline-ternary */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../lotties/137723-bouncing-ball-with-rectangle';
function Quote () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const [num, setNum] = useState(0);
    const Quote = [
        'Self-management is the ability to prioritize and manage your own goals, time, and resources effectively.\n - Brian Tracy',
        "Workaholism is a tricky addiction because it's often rewarded in our society. But the truth is: overworking is a red flag for underliving.\n -Brené Brown",
        'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.\n  - Christian D. Larson'
    ];
    function randomNumberInRange (min, max) {
    // get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                    setNum(randomNumberInRange(0, 2));
                    setShowModal(true);
                }}
            >
        Get Quote
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-4xl">
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">Today Quote</h3>
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
                                <div className="p-6 flex-row flex transition-opacity duration-700 opacity-100">
                                    <p className="flex my-4 text-slate-500 leading-relaxed text-xl items-center">
                                        {Quote[num]}
                                    </p>
                                    <Lottie options={defaultOptions}
                                        height={100}
                                        width={300}
                                    />
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Quote;
