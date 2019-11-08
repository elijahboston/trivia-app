import {default as React, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Button, QuestionTile, Layout} from '../components';
import {AppState, Answer} from '../redux/types'
import {answerQuestion} from '../redux/actions'

const QuestionPage = () => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const dispatch = useDispatch()
  const question = useSelector((state: AppState) => state.game.questions[state.game.currentQuestionId])
  const questionId = useSelector((state: AppState) => state.game.currentQuestionId)

  const clickHandler = (payload: Answer) => {
    setIsTransitioning(true)

    setTimeout(() => {
      dispatch(answerQuestion(payload))
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <Layout>
      <h1>{question.category}</h1>
      
      <QuestionTile isLeaving={isTransitioning}>
        {question.question}
      </QuestionTile>

      <h3>{questionId + 1}/10</h3>

      <div className='controls'>
        <Button
          onClick={() => clickHandler({ answer: true, id: questionId })}>
            True
        </Button>
        <Button
          onClick={() => clickHandler({ answer: false, id: questionId })}>
            False
        </Button>
      </div>
      <style jsx>{`
        h1 {
          min-height: 5rem;
          text-align: center;
        }
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