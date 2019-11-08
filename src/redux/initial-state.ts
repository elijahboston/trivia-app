import {AppState} from './types'

const initialState: AppState = {
  game: {
    isGameStarted: false,
    isGameOver: false,
    currentQuestionId: 0,
    questions: [],
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  api: {
    isLoading: false
  }
}

export default initialState;