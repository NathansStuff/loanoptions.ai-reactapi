import {
  FETCH_UNIVERSITIES,
  ADD_UNIVERSITY,
  DELETE_UNIVERSITY,
} from './university.types'

const INITIAL_STATE = {
  universities: {
    'state-province': null,
    country: 'Australia',
    name: 'Australian Correspondence Schools',
    web_pages: ['http://www.acs.edu.au/'],
    domains: ['acs.edu.au'],
    alpha_two_code: 'AU',
  },
}

export const universityReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_UNIVERSITY:
      return { ...state, universities: payload }
    case DELETE_UNIVERSITY:
      return {}
    default:
      return state
  }
}
