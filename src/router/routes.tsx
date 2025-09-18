import HomePage from "@pages/HomePage";
import AuthorizationPage from "@pages/AuthorizationPage";
import { type RouteObject } from "react-router-dom";

export const paths = {
    HOME: {
        id: "home",
        path: "/",
    },
    AUTHORIZATION: {
        id: "authorization",
        path: "/welcome"
    },
};

const routes: RouteObject[] = [
    {
        ...paths.HOME,
        element: <HomePage/>,
    },
    {
        ...paths.AUTHORIZATION,
        element: <AuthorizationPage/>,
    },
];

export default routes;