import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {Provider, ReactReduxContext} from 'react-redux'
import {API_DATA_LOADED} from '../redux/types'
import store from '../redux/store'
import QuestionPage from './question'

const stories = storiesOf('Question Page', module);

stories.add('default', () =>
  <Provider store={store}>
    <ReactReduxContext.Consumer>
      {({ store }) => {
        // Populate the store with a question
        // so we have something to render
        store.dispatch({
          type: API_DATA_LOADED,
          payload: {
            questions: [
              {
                category: 'Arts',
                type: 'boolean',
                difficulty: 'hard',
                question: 'Is up down?',
                correctAnswer: false,
              }
            ]
          }
        })

        return <QuestionPage />
      }}
    </ReactReduxContext.Consumer>
  </Provider>
)