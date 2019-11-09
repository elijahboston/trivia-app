import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {Provider, ReactReduxContext} from 'react-redux'
import {gameDataLoaded} from '../redux/game/actions'
import {apiDataLoaded} from '../redux/api/actions'
import store from '../redux/store'
import ResultsPage from './results'

const stories = storiesOf('Pages', module);

stories.add('Results', () =>
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
            question: 'Is the sky blue?',
            correctAnswer: true,
            answer: true
          },
          {
            id: 1,
            category: 'Arts',
            type: 'boolean',
            difficulty: 'hard',
            question: 'Is blue yellow?',
            correctAnswer: false,
            answer: true
          }
        ]))
        return <ResultsPage />
      }}
    </ReactReduxContext.Consumer>
  </Provider>
)