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
        color: #fff;
      }

      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        background-color: #784BA0;
        background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
        background-size: cover;
      }

      #root {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Provider>
    
export default App;