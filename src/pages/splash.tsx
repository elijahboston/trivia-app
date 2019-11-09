import * as React from 'react'
import {Button} from '../components'
import {useDispatch} from 'react-redux'
import {initializeApp} from '../redux/actions'
import Layout from '../containers/layout';

const SplashPage = () => {
  const dispatch = useDispatch()
  return (
    <Layout>
      <h1>Welcome to the trivia challenge!</h1>
      <p>You will be presented with 10 True or False questions!</p>
      <p>Can you score 100%?</p>
      <Button onClick={() => dispatch(initializeApp())}>Begin</Button>
      <style jsx>{`
        h1, p {
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}

export default SplashPage