import {
  FETCH_UNIVERSITIES,
  ADD_UNIVERSITY,
  DELETE_UNIVERSITY,
} from './university.types'

export const addUniversity = (university) => {
  return {
    type: ADD_UNIVERSITY,
    payload: {
      university: university
    }
  }
}

export const deleteUniversity = (university) => {
  return {
    type: DELETE_UNIVERSITY,
    payload: {
      university: university
    }
  }
}