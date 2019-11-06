import {
  AppStateType,
  GameActionTypes,
  QuestionType,
  START_GAME,
  RESET_GAME,
  ANSWER_QUESTION
} from './types'

import {
  ApiActionTypes, API_DATA_LOADING, API_DATA_LOADED
} from './api/types'
import { stat } from 'fs'

const initialState: AppStateType = {
  loading: false,
  started: false,
  ended: false,
  currentQuestion: 0,
  questions: [],
  correctAnswers: 0,
  incorrectAnswers: 0
}

function appReducer(
  state = initialState,
  action: GameActionTypes | ApiActionTypes
): AppStateType {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        started: true,
        ended: false
      }
    case RESET_GAME:
      return {
        ...state,
        ended: false,
        started: false
      }
    case ANSWER_QUESTION:
      let isCorrect = false
      const questions = Object
        // Create copy from state
        .assign({}, state.questions)
        // Update the question with the user's answer
        .map((q: QuestionType, i: number): QuestionType => {
          if (i === action.payload.questionNumber) {
            q.answer = action.payload.answer;

            if (q.answer === q.correctAnswer) {
              isCorrect = true
            }
          }

          return q;
        })

      return {
        ...state,
        // Increment stats
        correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        incorrectAnswers: !isCorrect ? state.incorrectAnswers + 1 : state.incorrectAnswers,
        // Update game state
        currentQuestion: state.currentQuestion + 1,
        // Update state with the answered question
        questions
      }
    case API_DATA_LOADING:
      return {
        ...state,
        loading: true
      }
    case API_DATA_LOADED:
        return {
          ...state,
          loading: false,
          questions: action.payload.questions
        }
    default:
      return state
  }
}

export default appReducer;