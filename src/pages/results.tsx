import * as React from 'react'
import {useSelector} from 'react-redux'
import {AppState, Question} from '../redux/types'
import {Button, Layout, ResultList} from '../components'

const ResultsPage = () => {
  const questions: Question[] = useSelector((state: AppState) => state.game.questions)
  const correctAnswers: number = useSelector((state: AppState) => state.game.correctAnswers)

  return (
    <Layout>
      <h1>You scored {correctAnswers}/{questions.length}</h1>
      <ResultList entries={questions} />
      <Button onClick={() => {}}>Play Again?</Button>
    </Layout>
  )
}

export default ResultsPage