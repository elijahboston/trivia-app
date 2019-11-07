import {default as axios} from 'axios'
import {default as parser} from 'html-react-parser'
import {
  ApiArgs,
  ApiResult,
  ApiResponseItem,
  ApiHandler
} from './types'

const API_URL = 'https://opentdb.com/api.php';

/**
 * Handle interacting with the OpenTable API
 * @param args Arguments to set as query string parameters
 */
const api = (args: ApiArgs): ApiHandler => {
  const getUrl = function (): string {
    const {
      amount,
      difficulty,
      type
    } = args;

    return `${API_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  }

  return {
    getQuestions: async (): Promise<ApiResult> => {
      try {
        const resp = await axios.get(getUrl());

        const questions = resp.data.results.map((item: ApiResponseItem, index: number) => {
          const {
            category,
            type,
            difficulty,
            question,
            correct_answer: correctAnswerStr
          } = item;

          return {
            id: index,
            category,
            type,
            difficulty,
            question: parser(question),
            correctAnswer: correctAnswerStr === 'True'
          }
        })

        return {questions}
      } catch (err) {
        return {
          err,
          questions: []
        };
      }
    }
  }
}

/**
 * Note we return an instance of the API handler
 */
const apiInstance = api({ amount: 10, difficulty: 'hard', type: 'boolean '})

export default apiInstance