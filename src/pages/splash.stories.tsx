import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {Provider} from 'react-redux'
import store from '../redux/store'
import SplashPage from './splash'

const stories = storiesOf('Splash Page', module);
stories.add('default', () => 
  <Provider store={store}>
    <SplashPage />
  </Provider>
)