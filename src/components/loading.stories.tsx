import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {Provider, ReactReduxContext} from 'react-redux'
import { apiDataLoading } from '../redux/api/actions';
import store from '../redux/store'
import Loading from './loading'

const stories = storiesOf('Loading Screen', module);

stories.add('default', () =>
  <Provider store={store}>
    <ReactReduxContext.Consumer>
      {({ store }) => {
        // Populate the store with a question
        // so we have something to render
        store.dispatch(apiDataLoading())

        return <Loading />
      }}
    </ReactReduxContext.Consumer>
  </Provider>
)
