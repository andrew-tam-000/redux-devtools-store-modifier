import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Root from './components/Root';
import './index.css';
import reduxLogger from 'redux-logger';

import adjustableStoreEnhancer from './redux/adjustableStoreEnhancer';

const initialState = {
    oneo: 'two',
    scoreboard: {
        test: [{
            val: 'wow',
            test: {
                more: 'wow'
            }

        }]
    },
    ps: 'wow'
};

const root = state => ({ state });
const ConnectedRoot = connect(root)(Root);

const reducer = (state = {}, action) => {
    return state;
};

const store = createStore(combineReducers({
    oneo: reducer,
    scoreboard: reducer,
    ps: reducer
}), initialState, compose(applyMiddleware(reduxLogger), adjustableStoreEnhancer()));

ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(ConnectedRoot, null)
), document.getElementById('root'));