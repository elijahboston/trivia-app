import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {Provider} from 'react-redux'
import store from '../redux/store'
import SplashPage from './splash'

const stories = storiesOf('Pages', module);
stories.add('Splash', () => 
  <Provider store={store}>
    <SplashPage />
  </Provider>
)