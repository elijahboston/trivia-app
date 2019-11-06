import { Dispatch } from 'redux'
import api from '../api'; 
import {
  Answer,
  ANSWER_QUESTION,
  GameActionTypes
} from './types'

import {
  API_DATA_LOADED,
  API_DATA_LOADING
} from './api/types'

/**
 * Dispatch action for when the user answers a question.
 * @param answer The answer given by the user.
 */
export function answerQuestion(answer: Answer): GameActionTypes {
  return {
    type: ANSWER_QUESTION,
    payload: answer
  }
}

export function initializeApp(): any {
  return async function(dispatch: Dispatch) {
    dispatch({ type: API_DATA_LOADING });

    const questions = await api.getQuestions()

    dispatch({
      type: API_DATA_LOADED,
      payload: { questions }
    });
  }
}