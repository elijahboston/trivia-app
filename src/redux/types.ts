export const START_GAME = 'START_GAME';
export const GAME_OVER = 'GAME_OVER';
export const RESET_GAME = 'RESET_GAME';
export const ANSWER_QUESTION = 'ANSWER_QUESTIONS';

export const APP_INIT = 'APP_INIT';

// State Types
export interface QuestionType {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correctAnswer: boolean,
  answer?: boolean
}

export interface AppStateType {
  /**
   * Whether the game data is loading.
   */
  isLoading: boolean,
  /**
   * Indicates the game is in progress.
   */
  isGameStarted: boolean,
  /**
   * Indicates the end of the game (i.e. all questions answered).
   */
  isGameOver: boolean,
  /**
   * Number of the current question, starting from zero index.
   */
  currentQuestion: number,
  /**
   * Our list of questions to ask.
   */
  questions: QuestionType[],
  correctAnswers: number,
  incorrectAnswers: number,
}

export interface Answer {
  answer: boolean,
  questionNumber: number
}

// Actions
interface AppInitialize {
  type: typeof APP_INIT
}

interface AnswerQuestionAction {
  type: typeof ANSWER_QUESTION,
  payload: Answer
}

interface StartGameAction {
  type: typeof START_GAME
}

interface ResetGameAction {
  type: typeof RESET_GAME
}

export type GameActionTypes = AppInitialize | AnswerQuestionAction | StartGameAction | ResetGameAction