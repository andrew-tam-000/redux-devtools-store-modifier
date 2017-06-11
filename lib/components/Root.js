'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
    var state = _ref.state,
        dispatch = _ref.dispatch;


    var paths = _lodash2.default.keys(state);

    return _react2.default.createElement(
        'div',
        { className: 'state' },
        _lodash2.default.map(paths, function (path) {
            return _react2.default.createElement(_Tree2.default, { dispatch: dispatch, state: state, path: [path], key: path });
        })
    );
};

exports.default = Root;