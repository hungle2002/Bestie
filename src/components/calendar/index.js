/* eslint-disable max-len */
import { useState } from 'react';
const Calendar = (props) => {
    return (
        <div className=" bg-white px-4  rounded-t sm:px-6 w-full h-full ">
            <div className='px-4 py-4 sm:px-6'>
                <div className="flex items-center justify-start gap-[15px]">
                    <a href='https://www.notion.so/'>
                        <img className='w-[40px] h-[40px]' src ={require('../../assets/google-calendar-icon.png')}/>
                    </a>
                    <p className="text-gray-900 text-[20px] text-md ">
                        <a href="https://calendar.google.com/">Calendar</a>
                    </p>
                </div>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <img className='w-auto h-auto' src ={require('../../assets/ggcalendar.png')}/>
            </div>
        </div>

    );
};
export default Calendar;
