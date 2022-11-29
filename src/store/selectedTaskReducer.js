const defaultState = {
    selectedTask: {
        id: null,
        title: null,
        number: null,
        description: null,
        createdAt: null,
        timeInProgress: null,
        expDate: null,
        priority: null,
        attachs: [],
        status: null,
        subtasks: [],
        comments: []
    }
}

const SELECTED_TASK = 'SELECTED_TASK'
const CHANGE_TITLE = 'CHANGE_TITLE'
const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION'
const CHANGE_PRIORITY = 'CHANGE_PRIORITY'
const CHANGE_SUBTASK = 'CHANGE_SUBTASK'
const CHANGE_ATTACH = 'CHANGE_ATTACH'
const CHANGE_COMMENT = 'CHANGE_COMMENT'
const CHANGE_SUBCOMMENT = 'CHANGE_SUBCOMMENT'
const DELETE_SUBTASK = 'DELETE_SUBTASK'
const DELETE_ATTACH = 'DELETE_ATTACH'

export const selectedTaskReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case SELECTED_TASK:
            return Object.assign({}, state, {
                selectedTask: {
                    ...state.selectedTask,
                    id: action.task.id,
                    title: action.task.title,
                    number: action.task.number,
                    description: action.task.description,
                    createdAt: Date.now(),
                    timeInProgress: action.task.timeInProgress,
                    expDate: action.task.expDate,
                    priority: action.task.priority,
                    attachs: action.task.attachs,
                    status: action.task.status,
                    subtasks: action.task.subtasks,
                    comments: action.task.comments
                }
            })
        case CHANGE_TITLE:
            return {
                ...state, selectedTask: {...state.selectedTask, title: action.newTitle}
            }
        case CHANGE_DESCRIPTION:
            return {
                ...state, selectedTask: {...state.selectedTask, description: action.newDescription}
            }
        case CHANGE_PRIORITY:
            return {
                ...state, selectedTask: {...state.selectedTask, priority: action.newPriority}
            }
        case CHANGE_SUBTASK:
            return {
                ...state, selectedTask: {...state.selectedTask, subtasks: [...state.selectedTask.subtasks.concat(action.newSubtask)]}
            }
        case DELETE_SUBTASK:
            return {
                ...state, selectedTask: {...state.selectedTask, subtasks: [...state.selectedTask.subtasks.filter(el => el !== action.deleteSubtask)]}
            }
        case CHANGE_ATTACH:
            return {
                ...state, selectedTask: {...state.selectedTask, attachs: [...state.selectedTask.attachs.concat(action.newAttach)]}
            }
        case DELETE_ATTACH:
            return {
                ...state, selectedTask: {...state.selectedTask, attachs: [...state.selectedTask.attachs.filter(el => el !== action.deleteAttach)]}
            }
        case CHANGE_COMMENT:
            return {
                ...state, selectedTask: {...state.selectedTask, comments: [...state.selectedTask.comments.concat(action.newComment)]}
            }
        case CHANGE_SUBCOMMENT:
            return {
                ...state, 
                selectedTask: {
                    ...state.selectedTask, 
                    comments: state.selectedTask.comments.map(el => el.id === action.newSubcomment.id ? {
                            ...el,
                                response: {
                                    text: action.newSubcomment.text,
                                    response: {}
                                }

                        }
                        : el)
                }
            }
        default:
            return state
    }
}
export const selectTask = (task) => ({type: SELECTED_TASK, task})
export  const changeTitle = (newTitle) => ({type: CHANGE_TITLE, newTitle})
export  const changeDescription = (newDescription) => ({type: CHANGE_DESCRIPTION, newDescription})
export  const changePriority = (newPriority) => ({type: CHANGE_PRIORITY, newPriority})
export  const changeSubtask = (newSubtask) => ({type: CHANGE_SUBTASK, newSubtask})
export  const changeAttach = (newAttach) => ({type: CHANGE_ATTACH, newAttach})
export  const changeComment = (newComment) => ({type: CHANGE_COMMENT, newComment})
export  const changeSubcomment = (newSubcomment) => ({type: CHANGE_SUBCOMMENT, newSubcomment})
export  const deleteSubtask = (deleteSubtask) => ({type: DELETE_SUBTASK, deleteSubtask})
export  const deleteAttach = (deleteAttach) => ({type: DELETE_ATTACH, deleteAttach})