'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Branch = function (_Component) {
    _inherits(Branch, _Component);

    function Branch(props) {
        _classCallCheck(this, Branch);

        var _this = _possibleConstructorReturn(this, (Branch.__proto__ || Object.getPrototypeOf(Branch)).call(this, props));

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(Branch, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                state = _props.state,
                path = _props.path,
                dispatch = _props.dispatch;


            var keys = _lodash2.default.keys(_lodash2.default.get(state, path));

            var contentClassName = _lodash2.default.compact(['state__branch-content'].concat(_toConsumableArray(this.state.open ? [] : ['state__branch-content--hide']))).join(' ');

            var icon = this.state.open ? String.fromCharCode(8722) : '+';

            return _react2.default.createElement(
                'div',
                { className: 'state__branch' },
                _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            return _this2.setState({ open: !_this2.state.open });
                        }, className: 'state__branch-label' },
                    icon,
                    ' ',
                    _lodash2.default.last(path)
                ),
                this.state.open ? _react2.default.createElement(
                    'div',
                    { className: contentClassName },
                    _lodash2.default.map(keys, function (key) {
                        return _react2.default.createElement(_Tree2.default, { dispatch: dispatch, state: state, path: [].concat(_toConsumableArray(path), [key]) });
                    })
                ) : null
            );
        }
    }]);

    return Branch;
}(_react.Component);

exports.default = Branch;