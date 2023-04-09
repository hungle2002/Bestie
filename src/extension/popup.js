/* eslint-disable no-undef */
import '../index.css';

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './build/content.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// chrome.tabs.insertCSS({ file: './build/content.js' });

// create a new link element
const link = document.createElement('link');

// set the rel, type, and href attributes
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('build/content.css');

// append the link element to the head of the document
document.head.appendChild(link);

const App = () => {
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
                <a href='localhost:3000/home'><h1 className="text-pink-500 font-bold text-3xl">Bestie</h1></a>
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
            <div className='pl-16 pt-5'><button
                onClick={async () => {
                    console.log('Button on click');
                    await chrome.storage.local.set({ scenario, mood });
                    await localStorage.setItem('scenario', scenario);
                    await localStorage.setItem('mood', mood);
                }}
                className='p-4 bg-pink-600 text-white font-medium rounded-md w-56'>Set scenario</button>
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

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// Message Listener function
// eslint-disable-next-line no-undef
// chrome.runtime.onMessage.addListener((request, sender, response) => {
//     // If message is injectApp
//     if (request.injectApp) {
//     // Inject our app to DOM and send response
//         injectApp();
//         response({
//             startedExtension: true
//         });
//     }
// });

// function injectApp () {
//     const newDiv = document.createElement('div');
//     newDiv.setAttribute('id', 'chromeExtensionReactApp');
//     document.body.appendChild(newDiv);
//     ReactDOM.render(<App />, newDiv);
//     console.log('Bestie: Content script');
// }
