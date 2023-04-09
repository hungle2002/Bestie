/* eslint-disable max-len */
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Images from '../assets/images';
import routes from '../config/routes';
import ChattingPage from '../pages/ChattingPage';
import HistoryPage from '../pages/HistoryPage';
import HomePage from '../pages/HomePage';
import SummaryPage from '../pages/SummaryPage';

const TempPage = () => {
    const [scenario, setScenario] = useState('start');
    const [mood, setMood] = useState('normal');
    const todos = {
        today: [{
            title: 'Todo title',
            status: 'On-Progress',
            due: '17-4-2023'
        }, {
            title: 'Todo title',
            status: 'On-Progress',
            due: '17-4-2023'
        }, {
            title: 'Todo title',
            status: 'On-Progress',
            due: '17-4-2023'
        }],
        upcomming: [{
            title: 'Read ML document',
            status: 'On-Progress',
            due: '17-4-2023'
        }, {
            title: 'Submit PPL Assignment',
            status: 'On-Progress',
            due: '17-4-2023'
        }, {
            title: 'Visit Parents',
            status: 'On-Progress',
            due: '17-4-2023'
        },
        {
            title: 'World domination',
            status: 'On-Progress',
            due: '17-4-2023'
        }]
    };
    const handleCheck = (index) => {
        const newStates = [...todoState];
        newStates[index] = !newStates[index];
        setTodoStates(newStates);
    };
    const [todoState, setTodoStates] = useState(Array(todos.today.length).fill(false));
    return (
        <div className="flex flex-col h-[600px] w-[400px] shadow sm:rounded-md">
            <div className='p-3 px-4'>
                <Link to='/home'><img className='w-auto h-16' src={Images.logoMini}/></Link>
            </div>

            <div className='pb-3 px-6'>
                <h1 className="text-xl font-bold font-poppins ">Scenario</h1>
                <div className='divide-y divide-gray-200'>
                    <div className='hover:bg-gray-50 pl-6 pb-1 pt-1'>
                        <input type="radio" name="Start of day" onClick={() => {
                            setScenario('start');
                        }} checked={scenario === 'start'} /> Start
                    </div>
                    {scenario === 'start' &&
                    <div className='divide-y divide-gray-200'>
                        <div className='hover:bg-gray-50 pl-6 pb-1 pt-1'>
                            <input type="radio" name="Normal day" onClick={() => {
                                setMood('normal');
                            }} checked={mood === 'normal'} /> Normal day
                        </div>
                        <div className='hover:bg-gray-50 pl-6 pb-1 pt-1'>
                            <input type="radio" name="Bad day" onClick={() => {
                                setMood('bad');
                            }} checked={mood === 'bad'} /> Bad day
                        </div>
                    </div>}
                    <div className='hover:bg-gray-50 pl-6 pt-1'>
                        <input type="radio" value="End of day" onClick={() => {
                            setScenario('end');
                        }} checked={scenario === 'end'}/> End
                    </div>
                </div>
            </div>
            <div className='p-3 px-6'>
                <div className='flex felx-row justify-between items-center'>
                    <h1 className="text-xl font-bold font-poppins ">Todo List</h1>
                    {<FontAwesomeIcon icon={faCirclePlus} className='mr-1.5 text-pink-500'/>}
                </div>
                <ul className="divide-y divide-gray-200">
                    {todos.upcomming.map((todo, index) => (
                        <li key={index}>
                            <a className="block hover:bg-gray-50 ">
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className='flex flex-start items-center gap-[10px]'>
                                            <input type="checkbox" className="h-[20px] w-[20px] " value="true" checked={todoState[index]} onClick={() => handleCheck(index)}/>
                                            <p className="text-gray-700 md:truncate text-sm" style={{ textDecoration: todoState[index] || todo.status === 'Done' ? 'line-through' : 'none' }}>
                                                {todo.title}
                                            </p>
                                        </div>
                                        <div className="flex flex-shrink-0 ml-2">
                                            <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                {!todoState[index] ? todo.status : 'Done'}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pl-16 pt-5'><button className='p-4 bg-pink-600 text-white font-medium rounded-md w-56'>Set scenario</button></div>

        </div>

    );
};

const publicRoutes = [
    {
        path: routes.home,
        component: HomePage,
        title: 'Home page title'
    },
    {
        path: routes.chatting,
        component: ChattingPage,
        title: 'Chatting page title'
    },
    {
        path: routes.summary,
        component: SummaryPage,
        title: 'Summary page title'
    },
    {
        path: routes.history,
        component: HistoryPage,
        title: 'history page title'
    },
    {
        path: '/temp',
        component: TempPage,
        title: 'Temp page for test'
    }
];

export default publicRoutes;
