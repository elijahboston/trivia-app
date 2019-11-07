import {
  API_DATA_LOADED,
  API_DATA_LOADING,
  ApiActionTypes
} from '../types'


export function apiDataLoading(): ApiActionTypes {
  return {
    type: API_DATA_LOADING
  }
}

export function apiDataLoaded(): ApiActionTypes {
  return {
    type: API_DATA_LOADED
  }
}
