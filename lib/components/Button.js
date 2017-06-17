'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var state = _ref.state,
        path = _ref.path,
        dispatch = _ref.dispatch,
        name = _ref.name,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'div',
        { className: 'state__button', onClick: onClick },
        name
    );
};

exports.default = Button;