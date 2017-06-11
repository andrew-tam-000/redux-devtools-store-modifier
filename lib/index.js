'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Root = require('./components/Root');

var _Root2 = _interopRequireDefault(_Root);

require('./index.css');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _adjustableStoreEnhancer = require('./redux/adjustableStoreEnhancer');

var _adjustableStoreEnhancer2 = _interopRequireDefault(_adjustableStoreEnhancer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
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

var root = function root(state) {
    return { state: state };
};
var ConnectedRoot = (0, _reactRedux.connect)(root)(_Root2.default);

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return state;
};

var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    oneo: reducer,
    scoreboard: reducer,
    ps: reducer
}), initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxLogger2.default), (0, _adjustableStoreEnhancer2.default)()));

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(ConnectedRoot, null)
), document.getElementById('root'));