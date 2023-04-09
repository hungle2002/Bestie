/* eslint-disable max-len */
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

    return (
        <div className="flex flex-col h-[600px] w-[400px] shadow sm:rounded-md">
            <div className='p-3'>
                <Link to='/home'><img className='w-auto h-16' src={Images.logoMini}/></Link>
            </div>

            <div className='p-3'>
                <h1 className="text-xl font-bold font-poppins ">Scenario</h1>
                <div>
                    <div>
                        <input className="" type="radio" name="Start of day" onClick={() => {
                            setScenario('start');
                        }} checked={scenario === 'start'} /> Start
                    </div>
                    {scenario === 'start' && <div>
                        <div>
                            <input type="radio" name="Normal day" onClick={() => {
                                setMood('normal');
                            }} checked={mood === 'normal'} /> Normal day
                        </div>
                        <div>
                            <input type="radio" name="Bad day" onClick={() => {
                                setMood('bad');
                            }} checked={mood === 'bad'} /> Bad day
                        </div>
                    </div>}
                    <div>
                        <input type="radio" value="End of day" onClick={() => {
                            setScenario('end');
                        }} checked={scenario === 'end'}/> End
                    </div>
                </div>
            </div>
            <button className='p-4 bg-pink-600 text-white font-medium rounded-md w-56'>Set scenario</button>
        </div>

    );
};

const publicRoutes = [
    {
        path: routes.home,
        component: HomePage,
        title: 'Dashboard'
    },
    {
        path: routes.history,
        component: HistoryPage,
        title: 'Show diary'
    },
    {
        path: routes.plan,
        component: HistoryPage,
        title: 'Planning'
    },
    {
        path: routes.summary,
        component: SummaryPage,
        title: 'About us'
    },
    {
        path: routes.chatting,
        component: ChattingPage,
        title: 'Chatting page title'
    },
    {
        path: '/temp',
        component: TempPage,
        title: 'Temp page for test'
    }
];

export const direction = [{
    path: routes.home,
    component: HomePage,
    title: 'Dashboard'
},
{
    path: routes.history,
    component: HistoryPage,
    title: 'Show diary'
},
{
    path: routes.plan,
    component: HistoryPage,
    title: 'Planning'
},
{
    path: routes.summary,
    component: SummaryPage,
    title: 'About us'
}];

export default publicRoutes;
