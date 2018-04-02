import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import store from '../../stores/index'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
  );
});
