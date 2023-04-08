import routes from '../config/routes';
import ChattingPage from '../pages/ChattingPage';
import HistoryPage from '../pages/HistoryPage';
import HomePage from '../pages/HomePage';
import SummaryPage from '../pages/SummaryPage';
;

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
    }
];

export default publicRoutes;
