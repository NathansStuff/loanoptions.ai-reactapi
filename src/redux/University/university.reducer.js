import {
  SET_UNIVERSITIES,
  ADD_UNIVERSITY,
} from './university.types'

const INITIAL_STATE = {
  universities: [
    {
      'state-province': null,
      country: 'Australia',
      name: 'Australian Correspondence Schools',
      web_pages: ['http://www.acs.edu.au/'],
      domains: ['acs.edu.au'],
      alpha_two_code: 'AU',
    },
    {
      'state-province': null,
      country: 'Australia',
      name: 'Australian Correspondence Schools',
      web_pages: ['http://www.acs.edu.au/'],
      domains: ['acs.edu.au'],
      alpha_two_code: 'AU',
    },
    {
      'state-province': null,
      country: 'Australia',
      name: 'Australian Correspondence Schools',
      web_pages: ['http://www.acs.edu.au/'],
      domains: ['acs.edu.au'],
      alpha_two_code: 'AU',
    },
  ],
}

export const universityReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_UNIVERSITY:
      console.log('add uni reducer')
      return {
        ...state,
        universities: [...state.universities, { ...payload }],
      }
    case SET_UNIVERSITIES:
      return {
        ...state,
        universities: payload
      }
    default:
      return state
  }
}
