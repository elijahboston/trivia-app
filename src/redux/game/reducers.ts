import {
  GameState,
  GameActionTypes,
  START_GAME,
  RESET_GAME,
  ANSWER_QUESTION
} from '../types'

const initialState: GameState = {
  isGameStarted: false,
  isGameOver: false,
  currentQuestionId: 0,
  questions: [],
  correctAnswers: 0,
  incorrectAnswers: 0
}

const gameReducer = (
  /* eslint-disable default-param-last */
  state = initialState,
  /* eslint-enable */
  action: GameActionTypes
): GameState => {
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
          id
        }
      } = action

      const isGameOver = state.currentQuestionId + 1 >= state.questions.length
      const isCorrect = state.questions[id].correctAnswer === answer

      // Create a copy of the questions from state to avoid mutation
      const questions = [...state.questions]
      
      // Update the answer on the question
      questions[id].answer = answer

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
        currentQuestionId: state.currentQuestionId + 1,
        isGameOver,
        // Update state with the answered question
        questions
      }
    }
    default: {
      return state
    }
  }
}

export default gameReducer;