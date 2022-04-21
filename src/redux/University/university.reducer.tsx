import { University } from '../../types/types'
import { SET_UNIVERSITIES, ADD_UNIVERSITY } from './university.types'

// For first time loading
const INITIAL_STATE = {
  universities: [],
}

interface Props {
  type: string
  payload: University | University[]
}

export function universityReducer(state = INITIAL_STATE, action: Props) {
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
        // Change the whole university state at once
        universities: payload,
      }
    default:
      return state
  }
}
