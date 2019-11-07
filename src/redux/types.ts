import { ApiResult } from '../api/types';

// Game Actions
export const APP_INIT = 'APP_INIT'
export const GAME_DATA_LOADED = 'GAME_DATA_LOADED'
export const START_GAME = 'START_GAME'
export const GAME_OVER = 'GAME_OVER'
export const RESET_GAME = 'RESET_GAME'
export const ANSWER_QUESTION = 'ANSWER_QUESTIONS'

// API Actions
export const API_DATA_LOADING = 'API_DATA_LOADING'
export const API_DATA_LOADED = 'API_DATA_LOADED'

// Basic Types
export interface Question {
  id: number,
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correctAnswer: boolean,
  answer?: boolean
}

export interface Answer {
  answer: boolean,
  id: number
}

export interface GameState {
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
  currentQuestionId: number,
  /**
   * Our list of questions to ask.
   */
  questions: Question[],
  correctAnswers: number,
  incorrectAnswers: number,
}

export interface ApiState {
  isLoading: boolean
}

// State Types
export interface AppState {
  game: GameState,
  api: ApiState
}

// Game Actions
interface AppInitialize {
  type: typeof APP_INIT
}

interface GameDataLoaded {
  type: typeof GAME_DATA_LOADED,
  payload: ApiResult
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

export type GameActionTypes = AppInitialize | GameDataLoaded | AnswerQuestionAction | StartGameAction | ResetGameAction

// API Actions
interface ApiDataLoadingAction {
  type: typeof API_DATA_LOADING
}

interface ApiDataLoadedAction {
  type: typeof API_DATA_LOADED
}

export type ApiActionTypes = ApiDataLoadedAction | ApiDataLoadingAction