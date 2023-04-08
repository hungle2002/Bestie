import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DefaultLayout from './layouts';
import puplicRoutes from './routes';

export default function App () {
    return (
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
    );
}
