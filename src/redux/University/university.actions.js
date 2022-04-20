import {
  FETCH_UNIVERSITIES,
  ADD_UNIVERSITY,
  DELETE_UNIVERSITY,
} from './university.types'

export const addUniversity = (university) => {
  console.log('add university action')
  return {
    type: ADD_UNIVERSITY,
    payload: university,
  }
}

export const deleteUniversity = (university) => {
  return {
    type: DELETE_UNIVERSITY,
    payload: {
      university: university,
    },
  }
}
