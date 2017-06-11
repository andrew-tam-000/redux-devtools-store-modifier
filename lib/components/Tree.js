'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Branch = require('./Branch');

var _Branch2 = _interopRequireDefault(_Branch);

var _Leaf = require('./Leaf');

var _Leaf2 = _interopRequireDefault(_Leaf);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function Tree(_ref) {
    var state = _ref.state,
        path = _ref.path;


    var value = _lodash2.default.get(state, path);

    var hasKeys = _lodash2.default.isObjectLike(value) && _lodash2.default.size(value);

    return _react2.default.createElement(
        'div',
        { className: 'state__tree' },
        hasKeys ? _react2.default.createElement(_Branch2.default, { path: path }) : _react2.default.createElement(_Leaf2.default, { path: path })
    );
};

exports.default = (0, _reactRedux.connect)(function (state) {
    return { state: state };
})(Tree);