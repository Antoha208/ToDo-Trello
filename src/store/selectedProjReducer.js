const defaultState = {
    selectedProject: {
        id: null,
        name: null,
        tasks: null
    }
}

const SELECTED_PROJECT = 'SELECTED_PROJECT'

export const selectedProjReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case SELECTED_PROJECT:
            return Object.assign({}, state, {
                selectedProject: {
                    ...state.selectedProject,
                    id: action.project.id,
                    name: action.project.name,
                    tasks: action.project.tasks,
                }
            })
        default:
            return state
    }
}
export const selectProject = (project) => ({type: SELECTED_PROJECT, project})
