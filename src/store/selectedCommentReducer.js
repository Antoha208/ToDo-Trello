const defaultState = {
    selectedComment: {
        id: null
    }
}

const SELECTED_COMMENT = 'SELECTED_COMMENT'

export const selectedCommentReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case SELECTED_COMMENT:
            return Object.assign({}, state, {
                selectedComment: {
                    ...state.selectedComment,
                    id: action.id,
                }
            })
        default:
            return state
    }
}

export const addId = (id) => ({type: SELECTED_COMMENT, id})

