import routes from '../config/routes';
import ChattingPage from '../pages/ChattingPage';
import HomePage from '../pages/HomePage'; ;

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
    }
];

export default publicRoutes;
