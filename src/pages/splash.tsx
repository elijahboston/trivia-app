import * as React from 'react'
import {Button, Layout} from '../components'
import {useDispatch} from 'react-redux'
import {initializeApp} from '../redux/actions'

const SplashPage = () => {
  const dispatch = useDispatch()
  return (
    <Layout>
      <h1>Welcome to the trivia challenge!</h1>
      <p>You will be presented with 10 True or False questions!</p>
      <p>Can you score 100%?</p>
      <Button onClick={() => dispatch(initializeApp())}>Begin</Button>
    </Layout>
  )
}

export default SplashPage