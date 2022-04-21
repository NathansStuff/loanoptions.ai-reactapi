import {
  ADD_UNIVERSITY,
  SET_UNIVERSITIES,
} from './university.types'

export function addUniversity(university) {
  return {
    type: ADD_UNIVERSITY,
    payload: university,
  }
}

// Would usually do this via ID and set / delete separately but there is no ID field on this data
export function setUniversities(universities) {
  return {
    type: SET_UNIVERSITIES,
    payload: universities,
  }
}
