/* eslint-disable max-len */
import { useState } from 'react';
const NotionTodo = (props) => {
    const {
        todos = {
            today: [{
                title: 'Todo title',
                status: 'On-Progress',
                due: '17-4-2023'
            }, {
                title: 'Todo title',
                status: 'On-Progress',
                due: '17-4-2023'
            }],
            upcomming: [{
                title: 'Todo title',
                status: 'On-Progress',
                due: '17-4-2023'
            }, {
                title: 'Todo title',
                status: 'On-Progress',
                due: '17-4-2023'
            }]
        }
    } = props;
    const [todoState, setTodoStates] = useState(Array(todos.today.length).fill(false));
    const handleCheck = (index) => {
        const newStates = [...todoState];
        newStates[index] = !newStates[index];
        setTodoStates(newStates);
    };
    return (
        <div className=" bg-white px-4 pt-5  rounded-t sm:px-6 w-full h-full ">
            <div className='px-4 py-4 sm:px-6'>
                <div className="flex items-center justify-start gap-[15px]">
                    <a href='https://www.notion.so/'>
                        <img className='w-[40px] h-[40px]' src ={require('../../assets/notion.png')}/>
                    </a>
                    <p className="text-gray-900 text-[20px] text-md dark:text-white md:truncate">
                        <a href="https://www.notion.so/">Notion</a>
                    </p>
                </div>
            </div>
            <div className='flex flex-row justify-between w-full'>
                <div className="flex-1 overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
                    <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-700 text-md dark:text-white md:truncate">
                                Today:
                            </p>
                            <div className="flex flex-shrink-0 ml-2">
                                <p className="inline-flex px-3 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                    {todos.today.length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        {todos.upcomming.map((todo, index) => (
                            <li key={index}>
                                <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className='flex flex-start items-center gap-[10px]'>
                                                <input type="checkbox" className="h-[20px] w-[20px] " value="true" checked={todoState[index]} onClick={() => handleCheck(index)}/>
                                                <p className="text-gray-700 text-md dark:text-white md:truncate" style={{ textDecoration: todoState[index] || todo.status === 'Done' ? 'line-through' : 'none' }}>
                                                    {todo.title}
                                                </p>
                                            </div>
                                            <div className="flex flex-shrink-0 ml-2">
                                                <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                    {!todoState[index] ? todo.status : 'Done'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                                                    {todo.due}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full p-4 mx-auto md:w-1/2">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                View all
                        </button>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
                    <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-700 text-md dark:text-white md:truncate">
                        Up Comming:
                            </p>
                            <div className="flex flex-shrink-0 ml-2">
                                <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                    {todos.today.length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <ul className="divide-y divide-gray-200">
                        {todos.upcomming.map((todo, index) => (
                            <li key={index}>
                                <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-700 text-md dark:text-white md:truncate">
                                                {todo.title}
                                            </p>
                                            <div className="flex flex-shrink-0 ml-2">
                                                <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                    {todo.status}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                                                    {todo.due}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full p-4 mx-auto md:w-1/2">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                View all
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default NotionTodo;
