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

var css = '.state {\n    font-size: 11px;\n    font-family: monaco, Consolas, "Lucida Console", monospace;\n    color: #6fb3d2;\n    overflow-y: auto;\n}\n\n.state__button {\n    text-transform: uppercase;\n    border: 1px solid #6fb3d2;\n    padding: .1em .5em;\n    cursor: pointer;\n    transition: color .2s, background-color .2s;\n}\n\n.state__button:hover {\n    background-color: #6fb3d2;\n    color: white;\n}\n\n.state__button + .state__button {\n    border-left: none;\n}\n\n.state__button,\n.state__button-set {\n    display: inline-block;\n}\n\n.state__branch {\n    position: relative;\n}\n\n.state__leaf,\n.state__branch {\n    padding-left: 1.5em;\n}\n\n.state__branch-label-icon {\n    position: absolute;\n    left: .6em;\n}\n\n.state__leaf {\n    overflow: hidden;\n}\n\n.state__input {\n    border: none;\n    background-color: transparent;\n    margin-left: 10px;\n    color: #a1c659;\n    float: left;\n    font-weight: 600;\n    position: relative;\n    margin-bottom: -1px;\n}\n\n.state__input:focus {\n    outline: none;\n    border-bottom: 1px solid #a1c659;\n}\n\n.state__leaf-label {\n    float: left;\n    cursor: pointer;\n}\n\n.state__branch-row .state__button-set {\n    margin-left: 1em;\n}\n\n.state__branch-row,\n.state__leaf {\n    padding-top: .3em;\n    padding-bottom: .3em;\n}\n\n.state__branch-label {\n    cursor: pointer;\n    display: inline-block;\n}\n\n.state__branch-content.state__branch-content--hide {\n    display: none;\n}\n';


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
            css
        ),
        _lodash2.default.map(paths, function (path) {
            return _react2.default.createElement(_Tree2.default, { dispatch: dispatch, state: state, path: [path], key: path });
        })
    );
};

exports.default = Root;