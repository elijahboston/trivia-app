import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {Provider, ReactReduxContext} from 'react-redux'
import {gameDataLoaded} from '../redux/game/actions'
import {apiDataLoaded} from '../redux/api/actions'
import store from '../redux/store'
import QuestionPage from './question'

const stories = storiesOf('Pages', module);

stories.add('Questions', () =>
  <Provider store={store}>
    <ReactReduxContext.Consumer>
      {({ store }) => {
        // Populate the store with a question
        // so we have something to render
        store.dispatch(apiDataLoaded())
        store.dispatch(gameDataLoaded([
          {
            id: 0,
            category: 'Arts',
            type: 'boolean',
            difficulty: 'hard',
            question: 'Is up down?',
            correctAnswer: false,
          }
        ]))
        return <QuestionPage />
      }}
    </ReactReduxContext.Consumer>
  </Provider>)