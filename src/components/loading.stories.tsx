import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {Provider, ReactReduxContext} from 'react-redux'
import { apiDataLoading } from '../redux/api/actions';
import store from '../redux/store'
import Loading from './loading'

const stories = storiesOf('Loading Screen', module);

stories.add('default', () => <Loading />)
