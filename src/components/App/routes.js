import { PROJECTS_ROUTE, TASKS_ROUTE} from '../../utils/consts'
import Projects from '../../pages/ProjectsPage/ProjectsPage'
import Tasks from '../../pages/TasksPage/TasksPage'


export const routes = [
    {
        path: PROJECTS_ROUTE,
        Component: Projects
    },

    {
        path: TASKS_ROUTE,
        Component: Tasks
    }
]