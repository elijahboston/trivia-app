import {default as axios} from 'axios';
import {
  ApiArgsType,
  ApiResultType,
  ApiResponseItemType,
  ApiHandlerType
} from './types'

const API_URL = 'https://opentdb.com/api.php';

/**
 * Handle interacting with the OpenTable API
 * @param args Arguments to set as query string parameters
 */
const api = (args: ApiArgsType): ApiHandlerType => {
  const getUrl = function () {
    const {
      amount,
      difficulty,
      type
    } = args;

    return `${API_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  }

  return {
    getQuestions: async (): Promise<ApiResultType> => {
      try {
        const resp = await axios.get(getUrl());

        const questions = resp.data.results.map((item: ApiResponseItemType) => {
          const {
            category,
            type,
            difficulty,
            question,
            correct_answer: correctAnswerStr
          } = item;

          return {
            category,
            type,
            difficulty,
            question,
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