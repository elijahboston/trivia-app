import * as React from 'react'
import {useSelector} from 'react-redux'
import {AppStateType, QuestionType} from '../redux/types'
import {Button, Layout, ResultList} from '../components'

const ResultsPage = () => {
  const questions: QuestionType[] = useSelector((state: AppStateType) => state.questions)
  const correctAnswers: number = useSelector((state: AppStateType) => state.correctAnswers)

  return (
    <Layout>
      <h1>You scored {correctAnswers}/{questions.length}</h1>
      <ResultList entries={questions} />
      <Button onClick={() => {}}>Play Again?</Button>
    </Layout>
  )
}

export default ResultsPage