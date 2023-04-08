import HomePage from "../pages/HomePage";
import ChattingPage from "../pages/ChattingPage";
import routes from '../config/routes'

const publicRoutes = [
  {
    path: routes.home,
    component: HomePage,
    title: "Home page title",
  },
  {
    path: routes.chatting,
    component: ChattingPage,
    title: "Chatting page title",
  },
];

export default publicRoutes;
