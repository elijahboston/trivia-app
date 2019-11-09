import {
  ApiState,
  ApiActionTypes,
  API_DATA_LOADING,
  API_DATA_LOADED
} from '../types'

const initialState: ApiState = { isLoading: false }

/**
 * Currently the API just needs to indicate if it's loading or not
 * @param state Current state
 * @param action Dispatched action
 */
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