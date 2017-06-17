'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leaf = function (_Component) {
    _inherits(Leaf, _Component);

    function Leaf(props) {
        _classCallCheck(this, Leaf);

        var _this = _possibleConstructorReturn(this, (Leaf.__proto__ || Object.getPrototypeOf(Leaf)).call(this, props));

        _this.state = {
            value: _lodash2.default.get(props.state, props.path),
            listening: true
        };
        return _this;
    }

    _createClass(Leaf, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var path = this.props.path;


            var value = this.state.listening ? this.getValueFromStore() : this.state.value;

            return _react2.default.createElement(
                'div',
                { className: 'state__leaf' },
                _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            return _this2._input.focus();
                        }, className: 'state__leaf-label' },
                    _lodash2.default.last(path),
                    ':'
                ),
                _react2.default.createElement('input', {
                    ref: function ref(input) {
                        return _this2._input = input;
                    },
                    onKeyPress: function onKeyPress(e) {
                        return _this2.updateInputViaEnter(e);
                    },
                    onBlur: function onBlur() {
                        return _this2.dispatchChange(path, _this2.state.value);
                    },
                    onFocus: function onFocus() {
                        return _this2.toggleListening(false);
                    },
                    onChange: function onChange(e) {
                        return _this2.updateInput(e);
                    },
                    className: 'state__input',
                    value: value
                })
            );
        }
    }, {
        key: 'updateInputViaEnter',
        value: function updateInputViaEnter(e) {
            if (e.key === 'Enter') {
                this.dispatchChange(this.props.path, this.state.value);
                this._input.blur();
            }
        }
    }, {
        key: 'dispatchChange',
        value: function dispatchChange() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            console.error("Dispatching", this.props.dispatch, args);
            this.props.dispatch(_actions.updateStore.apply(undefined, args));
            this.toggleListening(true);
        }
    }, {
        key: 'getValueFromStore',
        value: function getValueFromStore() {
            var _props = this.props,
                state = _props.state,
                path = _props.path;

            return _lodash2.default.get(state, path);
        }
    }, {
        key: 'updateInput',
        value: function updateInput(e) {
            var value = e.target.value;
            this.setState({ value: value });
        }
    }, {
        key: 'toggleListening',
        value: function toggleListening(force) {
            this.setState({ listening: force === true || force === false ? force : !this.state.listening });
        }
    }]);

    return Leaf;
}(_react.Component);

exports.default = Leaf;