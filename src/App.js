import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts';
import puplicRoutes from './routes';
export const AppContext = createContext();

export default function App () {
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
    return (
        <AppContext.Provider
            value = {{
                diaries,
                setDiaries,
                evalMarks,
                setEvalMarks,
                todos,
                setTodos
            }}
        >
            <Router>
                <div className="App">
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
