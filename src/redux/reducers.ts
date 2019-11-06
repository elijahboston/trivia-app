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

const initialState: AppStateType = {
  isLoading: false,
  isGameStarted: false,
  isGameOver: false,
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
        isGameStarted: true,
        isGameOver: false
      }
    case RESET_GAME:
      return {
        ...state,
        isGameStarted: false,
        isGameOver: false
      }
    case ANSWER_QUESTION:
      let isCorrect = false
      const questions =  state.questions
        .map((q: QuestionType, i: number): QuestionType => {
          // Update the question with the user's answer
          if (i === action.payload.questionNumber) {
            q.answer = action.payload.answer;

            if (q.answer === q.correctAnswer) {
              isCorrect = true
            }
          }

          return q;
        })
      
      const isGameOver = state.currentQuestion + 1 >= 10;

      return {
        ...state,
        // Increment stats
        correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        incorrectAnswers: !isCorrect ? state.incorrectAnswers + 1 : state.incorrectAnswers,
        // Update game state
        currentQuestion: isGameOver ? 0 : state.currentQuestion + 1,
        isGameOver,
        isGameStarted: !isGameOver,
        // Update state with the answered question
        questions
      }
    case API_DATA_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case API_DATA_LOADED:
        return {
          ...state,
          isLoading: false,
          questions: action.payload.questions
        }
    default:
      return state
  }
}

export default appReducer;