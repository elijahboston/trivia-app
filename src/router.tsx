import * as React from 'react'
import {useSelector} from 'react-redux'
import {SplashPage, QuestionPage, ResultPage} from './pages'
import {AppState} from './redux/types'

/**
 * A simple state-based router. We use isLoading, isGameOver, and isGameStarted
 * to determine where the user should be in the application.
 * @param props The game state to use for routing.
 */
const Router = () => {
  const gameState = useSelector((state: AppState) => {
    const { game, api } = state;
    const { isLoading } = api;
    const { isGameStarted, isGameOver } = game;
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
