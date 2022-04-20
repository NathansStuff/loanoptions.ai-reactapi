import { combineReducers } from 'redux'
import { universityReducer } from './University/university.reducer'

export const rootReducer = combineReducers({
  universities: universityReducer,
})
