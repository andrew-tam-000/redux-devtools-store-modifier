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

var styles = '\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.state {\n    color: #a1c659;\n    overflow-y: auto;\n}\n\n.state__branch {\n    padding-left: 10px;\n}\n\n.state__leaf {\n    overflow: hidden;\n    padding-left: 10px;\n}\n\n.state__leaf-content {\n    background-color: transparent;\n    margin-left: 10px;\n    color: #6fb3d2;\n    float: left;\n    font-weight: 600;\n}\n\n.state__leaf-label {\n    float: left;\n}\n\n.state__branch-content.state__branch-content--hide {\n    display: none;\n}\n';

var Root = function Root(_ref) {
    var state = _ref.state,
        dispatch = _ref.dispatch;


    var paths = _lodash2.default.keys(state);

    return _react2.default.createElement(
        'div',
        { className: 'state' },
        _react2.default.createElement(
            'style',
            null,
            styles
        ),
        _lodash2.default.map(paths, function (path) {
            return _react2.default.createElement(_Tree2.default, { dispatch: dispatch, state: state, path: [path], key: path });
        })
    );
};

exports.default = Root;