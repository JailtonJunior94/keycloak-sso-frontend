import { RouteProps } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Private } from '../pages/Private';

export interface MyRouteProps extends RouteProps {
    name: string;
    label: string;
    auth?: boolean;
}

const routes: MyRouteProps[] = [
    {
        name: 'login',
        label: 'Login',
        path: '/login',
        component: Login,
        exact: true,
        auth: false
    },
    {
        name: 'dashboard',
        label: 'Dashboard',
        path: '/',
        component: Dashboard,
        exact: true,
        auth: false
    },
    {
        name: 'private',
        label: 'Private',
        path: '/private',
        component: Private,
        exact: true,
        auth: true
    }
]

export default routes;