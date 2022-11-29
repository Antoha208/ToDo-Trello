import { createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import { projectsReducer } from './projectsReducer.js'
import { selectedProjReducer } from './selectedProjReducer.js'
import { tasksReducer } from './tasksReducer'
import { selectedTaskReducer } from './selectedTaskReducer.js'
import { selectedCommentReducer } from './selectedCommentReducer.js'

const rootReducer = combineReducers({
    projects: projectsReducer,
    selectedProject: selectedProjReducer,
    tasks: tasksReducer,
    selectedTask: selectedTaskReducer,
    selectedComment: selectedCommentReducer
})

const RESET = 'RESET'

const wrapRootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return rootReducer(state, action);
}

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, wrapRootReducer)

export const resetApp = () => ({type: RESET})
export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store) 