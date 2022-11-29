const defaultState = {
    tasks: []
}

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS'
const UPDATE_TASK = 'UPDATE_TASK'

export const tasksReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: state.tasks.concat(action.task)
            }
        case DELETE_TASK:
            return {
                ...state, tasks: state.tasks.filter(el => el.id != action.id)
            }
        case DELETE_ALL_TASKS:
            return {
                ...state, tasks: state.tasks.filter(el => el.id !== action.project.id)
            }
        case UPDATE_TASK:
            return {
                ...state, tasks: state.tasks.map(el => el.id === action.task.id ? {
                    ...el,
                        id: action.task.id,
                        title: action.task.title,
                        number: action.task.number,
                        description: action.task.description,
                        createdAt: action.task.createdAt,
                        timeInProgress: action.task.timeInProgress,
                        expDate: action.task.expDate,
                        priority: action.task.priority,
                        attachs: action.task.attachs,
                        status: action.task.status,
                        subtasks: action.task.subtasks,
                        comments: action.task.comments,
                        updatedAt: Date.now()
                }
                : el)
            }
        default:
            return state
    }
}
export const addTask = (task) => ({type: ADD_TASK, task})
export const deleteTask = (id) => ({type: DELETE_TASK, id})
export const deleteAllTasks = (project) => ({type: DELETE_ALL_TASKS, project})
export const updateTask = (task) => ({type: UPDATE_TASK, task})