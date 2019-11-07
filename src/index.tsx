import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import App from './app';

/**
 * Inject root component into page
 */
ReactDOM.render(
    <App />, document.querySelector('#root')
);