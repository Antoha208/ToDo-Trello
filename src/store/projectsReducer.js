const defaultState = {
    projects: []
}

const ADD_PROJECT = 'ADD_PROJECT'
const DELETE_PROJECT = 'DELETE_PROJECT'

export const projectsReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case ADD_PROJECT:
            return {
                ...state, projects: state.projects.concat(action.project)
            }
        case DELETE_PROJECT:
            return {
                ...state, projects: state.projects.filter(el => el.id !== action.project.id)
            }
        default:
            return state
    }
}
export const addProject = (project) => ({type: ADD_PROJECT, project})
export const deleteProject = (project) => ({type: DELETE_PROJECT, project})
