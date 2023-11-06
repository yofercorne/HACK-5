import { HomePage, TasksPage, ProfilePage, GroupsPage, PersonsPage, TipogruposPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/groups',
        element: GroupsPage
    },
    {
        path: '/persons',
        element: PersonsPage
    },
    {
        path: '/tipogrupos',
        element: TipogruposPage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
