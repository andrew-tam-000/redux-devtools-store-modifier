import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Root from './components/Root';
import './index.css';
import reduxLogger from 'redux-logger';
import initialState from './initialState';

import adjustableStoreEnhancer from './redux/adjustableStoreEnhancer';

const root = state => ({state});
const ConnectedRoot = connect(root)(Root);

const reducer = (state = {}, action) => {
    return state;
};

const store = createStore(
    reducer,
    /*
    combineReducers({
        scoreboard: reducer,
        ps: reducer
    }),
    */
    initialState,
    compose(
        applyMiddleware(reduxLogger),
        adjustableStoreEnhancer()
    )
);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRoot/>
    </Provider>,
    document.getElementById('root')
);
