import * as React from 'react'
import {useSelector} from 'react-redux'
import {SplashPage, QuestionPage, ResultPage} from './pages'
import {AppStateType} from './redux/types'

/**
 * A simple state based router component.
 * @param props The game state to use for routing.
 */
const Router = () => {
  const gameState = useSelector((state: AppStateType) => {
    const { isLoading, isGameStarted, isGameOver } = state;
    return {
      isLoading,
      isGameStarted,
      isGameOver
    }
  });

  if (gameState.isLoading) return <div>Loading...</div>

  if (gameState.isGameOver) return <ResultPage />
  
  if (!gameState.isGameStarted) return <SplashPage />

  if (gameState.isGameStarted) return <QuestionPage />
}

export default Router;
