import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts';
import puplicRoutes from './routes';
export const AppContext = createContext();

export default function App () {
    const [diaries, setDiaries] = useState([
        {
            title: '1/2023',
            content: 'Content',
            header: 'Header',
            status: 'done',
            type: 'project A'
        },
        {
            title: '1/2023',
            content: 'Content',
            header: 'Header',
            type: 'project A'
        },
        {
            title: '1/2023',
            content: 'Content',
            header: 'Header',
            type: 'project A'
        },
        {
            title: '1/2023',
            content: 'Content',
            header: 'Header',
            type: 'project A'
        },
        {
            title: '1/2023',
            content: 'Content',
            header: 'Header',
            type: 'project A'
        },
        {
            title: '1/2023',
            content: 'Content',
            header: 'Header',
            type: 'project A'
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
