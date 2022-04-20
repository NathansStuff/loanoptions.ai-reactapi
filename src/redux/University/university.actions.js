import {
  ADD_UNIVERSITY,
  SET_UNIVERSITIES,
} from './university.types'

export const addUniversity = (university) => {
  console.log('add university action')
  return {
    type: ADD_UNIVERSITY,
    payload: university,
  }
}

export const setUniversities = (universities) => {
  return {
    type: SET_UNIVERSITIES,
    payload: universities,
  }
}
