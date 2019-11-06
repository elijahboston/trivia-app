import {QuestionType} from '../redux/types';

/**
 * An interface for the answer as returned from the API
 */
export interface ApiResponseItemType {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

/**
 * The returned data from our API handler
 */
export interface ApiResultType {
  questions: QuestionType[],
  err?: object
}

/**
 * Arguments set in the query string of the API request
 */
export interface ApiArgsType {
  amount: number,
  difficulty: string,
  type: string
}

export interface ApiHandlerType {
  /**
   * Fetch a list of questions from the API
   */
  getQuestions(): Promise<ApiResultType>
}