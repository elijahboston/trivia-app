import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Button, Question, Layout} from '../components';
import {AppStateType, ANSWER_QUESTION} from '../redux/types'

const QuestionPage = () => {
  const dispatch = useDispatch()
  const question = useSelector((state: AppStateType) => state.questions[state.currentQuestion])
  const questionNumber = useSelector((state: AppStateType) => state.currentQuestion)

  const answerQuestion = (answer: boolean) => {
    dispatch({
      type: ANSWER_QUESTION,
      payload: {
        answer,
        questionNumber
      }
    })
  }

  return (
    <Layout>
      <h1>{question.category}</h1>
      <Question>
        {question.question}
      </Question>
      <div className='controls'>
        <Button onClick={() => answerQuestion(true)}>True</Button>
        <Button onClick={() => answerQuestion(false)}>False</Button>
      </div>
      <style jsx>{`
        .controls {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </Layout>
  )
}

  export default QuestionPage