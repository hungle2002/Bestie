import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts';
import puplicRoutes from './routes';
export const AppContext = createContext();

export default function App () {
    const backGroundDiary = [
        {
            title: '8/4/2023',
            content: 'Earn only 5.5, too low for all my attempt',
            header: 'IETLS self-learning',
            type: 'Studying'
        },
        {
            title: '7/4/2023',
            content: 'I were sick and can not complete the lab',
            header: 'Miss deadline for OS lab',
            type: 'Minathon project'
        },
        {
            title: '6/4/2023',
            content: 'Overnight with friend for design UI of UWC project',
            header: 'Design UX/UI',
            type: 'UWC project'
        },
        {
            title: '5/4/2023',
            content: 'Fine by police went hang out with friend',
            header: 'Farther birthday',
            type: 'Family'
        },
        {
            title: '4/4/2023',
            content: 'Get only 4.5 scores on IETLS online testing',
            header: 'IETLS self-study',
            type: 'Self-study'
        },
        {
            title: '3/4/2023',
            content: 'Overnight with friend for design UI of UWC project',
            header: 'Design UX/UI',
            type: 'UWC project'
        },
        {
            title: '1/4/2023',
            content: 'Get schoolarship for hard studying',
            header: 'Schoollarship',
            type: 'Studying'
        },
        {
            title: '20/3/2023',
            content: 'Get 9.5 marks on PPL midterm exams',
            header: 'School mark',
            type: 'Studying'
        }
    ];
    const [diaries, setDiaries] = useState([
        {
            title: '8/2023',
            header: 'Codegen for MIPS',
            content: 'Assignment for PPL course',
            type: 'PPL project'
        },
        {
            title: '7/2023',
            header: 'Host server',
            content: 'Finding and choose a server (Heroku)',
            type: 'Bestie project'
        },
        {
            title: '6/2023',
            content: 'Complete UI design for dashboard and statistic page',
            header: 'UI design',
            type: 'Bestie project'
        },
        {
            title: '4/2023',
            content: 'Draw EERD and mapping design',
            header: 'Design database',
            type: 'Self project',
            current: true
        },
        {
            title: '12/2022',
            content: 'Complete all details for my English project',
            header: 'Brainstorm',
            type: 'Self project'
        },
        {
            title: '11/2023',
            content: 'Complete UI design for dashboard and statistic page',
            header: 'UI design',
            type: 'Bestie project'
        }
    ]);
    const [evalMarks, setEvalMarks] = useState([70, 90, 50, 60, 30, 40, 20]);
    const [todos, setTodos] = useState({
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
    });
    const [data, setData] = useState({});
    useEffect(() => {
        window.localStorage.clear();
        const timer = setTimeout(() => {
            console.log(JSON.parse(window.localStorage.getItem('data')));
            setData(JSON.parse(window.localStorage.getItem('data')));
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <AppContext.Provider
            value = {{
                data,
                setData,
                diaries,
                setDiaries,
                evalMarks,
                setEvalMarks,
                todos,
                setTodos
            }}
        >
            <Router>
                <div className="App text-black">
                    <Routes>
                        {puplicRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </AppContext.Provider>
    );
}
