import * as React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {AppState, Question} from '../redux/types'
import {Button, ResultList} from '../components'
import {resetGame} from '../redux/game/actions'
import Layout from '../containers/layout';

const ResultsPage = () => {
  const dispatch = useDispatch()
  const questions: Question[] = useSelector((state: AppState) => state.game.questions)
  const correctAnswers: number = useSelector((state: AppState) => state.game.correctAnswers)

  return (
    <Layout>
      <h1>You scored {correctAnswers}/{questions.length}</h1>
      <ResultList entries={questions} />
      <Button onClick={() => dispatch(resetGame())}>Play Again?</Button>
    </Layout>
  )
}

export default ResultsPage