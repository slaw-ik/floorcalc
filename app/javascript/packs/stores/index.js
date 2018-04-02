import React from 'react';

import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import boardReducer from '../reducers/index'

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

export default createStore(boardReducer, composedEnhancers);