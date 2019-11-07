import * as React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Router from './router'

/**
 * The root component
 */
const App = () =>
  <Provider store={store}>
    <Router />
    <style jsx global>{`
      html {
        font-family: 'Open Sans', sans-serif;
        margin: 1rem;
        padding: 0;
      }

      #root {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Provider>
    
export default App;