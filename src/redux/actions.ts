import { Dispatch } from 'redux'
import api from '../api'
import { ApiResultType } from '../api/types'
import {
  Answer,
  ANSWER_QUESTION,
  START_GAME,
  GameActionTypes
} from './types'
import {
  apiDataLoaded,
  apiDataLoading
} from './api/actions'


/**
 * Dispatch action for when the user answers a question.
 * @param answer The answer given by the user.
 */
export function answerQuestion(payload: Answer): GameActionTypes {
  return {
    type: ANSWER_QUESTION,
    payload
  }
}

export function startGame(): GameActionTypes {
  return {
    type: START_GAME
  }
}

export function initializeApp() {
  return async function(dispatch: Dispatch) {
    dispatch(apiDataLoading())

    const resp: ApiResultType = await api.getQuestions()

    dispatch(apiDataLoaded(resp.questions))

    dispatch(startGame())
  }
}