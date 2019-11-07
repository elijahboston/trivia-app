import {
  ApiState,
  ApiActionTypes,
  API_DATA_LOADING,
  API_DATA_LOADED
} from '../types'

const initialState: ApiState = { isLoading: false }

const apiReducer = (
  /* eslint-disable default-param-last */
  state = initialState,
  /* eslint-enable */
  action: ApiActionTypes
): ApiState => {
  switch(action.type) {
    case API_DATA_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case API_DATA_LOADED: {
      return {
        ...state,
        isLoading: false
      }
    }
    default: {
      return state
    }
  }
}

export default apiReducer;