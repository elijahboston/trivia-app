import apiReducers from './api/reducers'
import gameReducers from './game/reducers'

import {combineReducers} from 'redux'

export default combineReducers({ api: apiReducers, game: gameReducers })