import * as React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Router from './router'

const App = () =>
  <Provider store={store}>
    <Router />
    <style jsx global>{`
      html {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
  </Provider>
    
export default App;