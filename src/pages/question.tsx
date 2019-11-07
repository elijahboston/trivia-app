import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Button, QuestionTile, Layout} from '../components';
import {AppState, Answer} from '../redux/types'
import {answerQuestion} from '../redux/actions'

const QuestionPage = () => {
  const dispatch = useDispatch()
  const question = useSelector((state: AppState) => state.game.questions[state.game.currentQuestionId])
  const questionNumber = useSelector((state: AppState) => state.game.currentQuestionId)

  const clickHandler = (payload: Answer) => {
    dispatch(answerQuestion(payload))
  }

  return (
    <Layout>
      <h1>{question.category}</h1>
      <h3>{questionNumber + 1}/10</h3>
      <QuestionTile>
        {question.question}
      </QuestionTile>
      <div className='controls'>
        <Button
          onClick={() => clickHandler({ answer: true, id: question.id })}
          primaryColor='green'>
            True
        </Button>
        <Button
          onClick={() => clickHandler({ answer: false, id: question.id })}
          primaryColor='red'>
            False
        </Button>
      </div>
      <style jsx>{`
        .controls {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
      `}</style>
    </Layout>
  )
}

  export default QuestionPage