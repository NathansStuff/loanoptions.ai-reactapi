import { SET_UNIVERSITIES, ADD_UNIVERSITY } from './university.types'

// For first time loading
const INITIAL_STATE = {
  universities: [],
}

export const universityReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_UNIVERSITY:
      return {
        ...state,
        // Spread the extra uni
        universities: [...state.universities, { ...payload }],
      }
    case SET_UNIVERSITIES:
      return {
        ...state,
        // Change the whole state at once
        universities: payload,
      }
    default:
      return state
  }
}
