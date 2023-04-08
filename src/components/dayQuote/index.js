/* eslint-disable react/no-unescaped-entities */
import Lottie from 'react-lottie';

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
    return (
        <div className='fixed top-0 left-0'>
            <div className="h-screen w-screen bg-black opacity-50 z-10"></div>
            <div className='absolute top-0 left-0 flex justify-center items-center h-screen w-screen z-20' >
                <div className="max-w-4xl border border-gray-300 rounded-lg p-10 shadow-xl bg-white">
                    <div className="flex flex-row ">
                        <div className="basis-2/3 mt-10">
                            <h1 className="text-xl text-slate-400 font-medium">What's the quote today ?</h1>
                            <h1 className='font-sans text-3xl mt-6 italic text-zinc-500'>"Success is not final, failure is not fatal: it is the courage to continue that counts."</h1>
                            <p className='text-lg text-right mt-2'>-Winston Churchill-</p>
                        </div>
                        <div className="basis-1/3">
                            <Lottie options={defaultOptions}
                                height={300}
                                width={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Quote;
