import {
  Question,
  Answer,
  GameActionTypes,
  START_GAME,
  RESET_GAME,
  GAME_DATA_LOADED,
  ANSWER_QUESTION
} from '../types'

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
/**
 * When the API finishes loading we dispatch this action
 * to set the questions in the game's state
 * @param questions Array of questions
 */
export function gameDataLoaded(questions: Question[]): GameActionTypes {
  return {
    type: GAME_DATA_LOADED,
    payload: { questions }
  }
}

export function startGame(): GameActionTypes {
  return {
    type: START_GAME
  }
}

export function resetGame(): GameActionTypes {
  return {
    type: RESET_GAME
  }
}