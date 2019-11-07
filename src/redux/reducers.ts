import {
  AppStateType,
  GameActionTypes,
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

const appReducer = (
  /* eslint-disable default-param-last */
  state = initialState,
  /* eslint-enable */
  action: GameActionTypes | ApiActionTypes
): AppStateType => {
  switch(action.type) {
    case START_GAME: {
      return {
        ...state,
        isGameStarted: true,
        isGameOver: false
      }
    }
    case RESET_GAME: {
      return {
        ...state,
        isGameStarted: false,
        isGameOver: false
      }
    }
    case ANSWER_QUESTION: {
      const {
        payload: {
          answer,
          questionNumber
        }
      } = action

      const isGameOver = state.currentQuestion + 1 >= 10;
      const isCorrect = state.questions[questionNumber].correctAnswer === answer

      // Create a copy of the questions from state to avoid mutation
      const questions = Object.assign({}, state.questions)
      
      // Update the answer on the question
      questions[questionNumber].answer = answer

      // Increment appropriate answer stats
      let answerStats = {};

      // Handle logic here instead of within the return
      if (isCorrect) {
        answerStats = {
          correctAnswers: state.correctAnswers + 1,
        }
      } else {
        answerStats = {
          incorrectAnswers: state.incorrectAnswers + 1,
        }
      }

      return {
        ...state,
        ...answerStats,
        currentQuestion: state.currentQuestion + 1,
        isGameOver,
        // Update state with the answered question
        questions
      }
    }
    case API_DATA_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case API_DATA_LOADED: {
      return {
        ...state,
        isLoading: false,
        questions: action.payload.questions
      }
    }
    default: {
      return state
    }
  }
}

export default appReducer;