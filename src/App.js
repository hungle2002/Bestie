import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import puplicRoutes from "./routes";
import DefaultLayout from "./layouts";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {puplicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout title={route.title}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
