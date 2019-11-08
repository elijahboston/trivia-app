import {Dispatch} from 'redux'
import api from '../api'
import {apiDataLoaded, apiDataLoading} from './api/actions'
import {startGame, gameDataLoaded} from './game/actions'
import {ApiResult} from '../api/types'

// Only expose actions that are needed by components
export {startGame, answerQuestion} from './game/actions'

/**
 * Simple thunk to fetch API results
 */
export function initializeApp() {
  return async function(dispatch: Dispatch) {
    dispatch(apiDataLoading())

    const resp: ApiResult = await api.getQuestions()

    dispatch(apiDataLoaded())
    dispatch(gameDataLoaded(resp.questions))
    dispatch(startGame())
  }
}