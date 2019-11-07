import {Question} from '../redux/types';

/**
 * the structure of the questions as seen in the API response
 */
export interface ApiResponseItem {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  /* eslint-disable @typescript-eslint/camelcase */
  // These values are from the API so we can't camelCase them
  correct_answer: string,
  incorrect_answers: string[]
  /* eslint-enable */
}

/**
 * The returned data from our API handler
 */
export interface ApiResult {
  /**
   * Array of questions from the API response.
   */
  questions: Question[],
  /**
   * The error -- if any -- that was returned from the response.
   */
  err?: object
}

/**
 * Arguments set in the query string of the API request
 */
export interface ApiArgs {
  /**
   * Number of questions (default: 10)
   */
  amount: number,
  /**
   * Difficulty of the questions (default: "hard")
   */
  difficulty: string,
  /**
   * Type of questions (default: "boolean")
   */
  type: string
}

export interface ApiHandler {
  /**
   * Fetch a list of questions from the API
   */
  getQuestions(): Promise<ApiResult>
}