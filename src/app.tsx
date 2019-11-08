import * as React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Router from './router'
import globalStyle from './styles/global'

/**
 * The root component
 */
const App = () =>
  <Provider store={store}>
    <Router />
    <style jsx global>{globalStyle}</style>
  </Provider>
    
export default App;