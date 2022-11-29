const EDITING_TITLET = 'editingTitle'
const EDITING_TITLEF = '!editingTitle'
const EDITING_DESCRIPTIONT = 'editingDescription'
const EDITING_DESCRIPTIONF = '!editingDescription'
const EDITING_PRIORITYT = 'editingPriority'
const EDITING_PRIORITYF = '!editingPriority'
const EDITING_STATUST = 'editingStatus'
const EDITING_STATUSF = '!editingStatus'
const EDITING_SUBTASKT = 'editingSubtask'
const EDITING_SUBTASKF = '!editingSubtask'
const EDITING_ATTACHST = 'editingAttachs'
const EDITING_ATTACHSF = '!editingAttachs'
const EDITING_COMMENTT = 'editingComment'
const EDITING_COMMENTF = '!editingComment'
const EDITING_SUBCOMMENTT = 'editingSubcomment'
const EDITING_SUBCOMMENTF = '!editingSubComment'
const NEW_TITLE = 'newTitle'
const NEW_DESCRIPTION = 'newDescription'
const NEW_PRIORITY = 'newPriority'
const NEW_STATUS = 'newStatus'
const NEW_SUBTASK = 'newSubtask'
const NEW_ATTACHS = 'newAttachs'
const NEW_COMMENT = 'newComment'
const SAVE_BUTTON = 'saveButton'

export default function localReducer(state, action) {
    switch (action.type) {
        case EDITING_TITLET:
            return {
                ...state,
                editingTitle: true
            }
        case EDITING_TITLEF:
            return {
                ...state,
                editingTitle: false
            }
        case EDITING_DESCRIPTIONT:
            return {
                ...state,
                editingDescription: true
            }
        case EDITING_DESCRIPTIONF:
            return {
                ...state,
                editingDescription: false
            }
        case EDITING_PRIORITYT:
            return {
                ...state,
                editingPriority: true
            }
        case EDITING_PRIORITYF:
            return {
                ...state,
                editingPriority: false
            }
        case EDITING_STATUST:
            return {
                ...state,
                editingStatus: true
            }
        case EDITING_STATUSF:
            return {
                ...state,
                editingStatus: false
            }
        case EDITING_SUBTASKT:
            return {
                ...state,
                editingSubtask: true
            }
        case EDITING_SUBTASKF:
            return {
                ...state,
                editingSubtask: false
            }
        case EDITING_ATTACHST:
            return {
                ...state,
                editingAttachs: true
            }
        case EDITING_ATTACHSF:
            return {
                ...state,
                editingAttachs: false
            }
        case EDITING_COMMENTT:
            return {
                ...state,
                editingComment: true
            }
        case EDITING_COMMENTF:
            return {
                ...state,
                editingComment: false
            }
        case EDITING_SUBCOMMENTT:
            return {
                ...state,
                editingSubcomment: true
            }
        case EDITING_SUBCOMMENTF:
            return {
                ...state,
                editingSubcomment: false
            }
        case NEW_TITLE:
            return {
                ...state,
                newTitle: action.payload
            }
        case NEW_DESCRIPTION:
            return {
                ...state,
                newDescription: action.payload
            }
        case NEW_PRIORITY:
            return {
                ...state,
                newPriority: action.payload
            }
        case NEW_STATUS:
            return {
                ...state,
                newStatus: action.payload
            }
        case NEW_SUBTASK:
            return {
                ...state,
                newSubtask: action.payload
            }
        case NEW_ATTACHS:
            return {
                ...state,
                newAttach: action.payload
            }
        case NEW_COMMENT:
            return {
                ...state,
                newComment: {...state.newComment, text: action.payload}
            }
        case SAVE_BUTTON:
            return {
                ...state,
                saveButton: action.payload
            }
        default:
            return state
    }
}