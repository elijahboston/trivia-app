import {
  API_DATA_LOADED,
  API_DATA_LOADING,
  ApiActionTypes
} from './types'

import {
  Question
} from '../types'


export function apiDataLoading(): ApiActionTypes {
  return {
    type: API_DATA_LOADING
  }
}

export function apiDataLoaded(questions: Question[]): ApiActionTypes {
  return {
    type: API_DATA_LOADED,
    payload: { questions }
  }
}
