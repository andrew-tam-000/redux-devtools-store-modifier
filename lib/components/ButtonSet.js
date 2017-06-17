'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonSet = function (_Component) {
    _inherits(ButtonSet, _Component);

    function ButtonSet(props) {
        _classCallCheck(this, ButtonSet);

        var _this = _possibleConstructorReturn(this, (ButtonSet.__proto__ || Object.getPrototypeOf(ButtonSet)).call(this, props));

        _this.state = {
            addConfirm: false,
            deleteConfirm: false,
            contentToAdd: ''
        };
        return _this;
    }

    _createClass(ButtonSet, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'state__button-set' },
                this.state.addConfirm ? this.renderAddButtonSet() : this.state.deleteConfirm ? this.renderDeleteButtonSet() : this.renderDefaultButtonSet()
            );
        }
    }, {
        key: 'toggleAddButtonSet',
        value: function toggleAddButtonSet() {
            this.setState({ addConfirm: !this.state.addConfirm });
        }
    }, {
        key: 'toggleDeleteButtonSet',
        value: function toggleDeleteButtonSet() {
            this.setState({ deleteConfirm: !this.state.deleteConfirm });
        }
    }, {
        key: 'deleteBranch',
        value: function deleteBranch() {
            this.props.dispatch((0, _actions.updateStore)(this.props.path, null));
        }
    }, {
        key: 'addBranch',
        value: function addBranch() {
            this.props.dispatch((0, _actions.updateStore)(this.props.path, this.state.contentToAdd));
        }
    }, {
        key: 'updateAddContent',
        value: function updateAddContent(e) {
            this.setState({
                contentToAdd: e.target.value
            });
        }
    }, {
        key: 'renderDeleteButtonSet',
        value: function renderDeleteButtonSet() {
            var _this2 = this;

            return [_react2.default.createElement(_Button2.default, { key: 'confirm', onClick: function onClick() {
                    return _this2.deleteBranch();
                }, name: 'Confirm' }), _react2.default.createElement(_Button2.default, { key: 'cancel', onClick: function onClick() {
                    return _this2.toggleDeleteButtonSet();
                }, name: 'Cancel' })];
        }
    }, {
        key: 'confirmAdd',
        value: function confirmAdd() {
            this.addBranch();
            this.toggleAddButtonSet();
        }
    }, {
        key: 'renderAddButtonSet',
        value: function renderAddButtonSet() {
            var _this3 = this;

            return [_react2.default.createElement('input', { className: 'state__input', onChange: function onChange(e) {
                    return _this3.updateAddContent(e);
                }, value: this.state.contentToAdd, ref: function ref(input) {
                    return input && input.focus();
                } }), _react2.default.createElement(_Button2.default, { key: 'confirm', onClick: function onClick() {
                    return _this3.confirmAdd();
                }, name: 'Confirm' }), _react2.default.createElement(_Button2.default, { key: 'cancel', onClick: function onClick() {
                    return _this3.toggleAddButtonSet();
                }, name: 'Cancel' })];
        }
    }, {
        key: 'renderDefaultButtonSet',
        value: function renderDefaultButtonSet() {
            var _this4 = this;

            return [_react2.default.createElement(_Button2.default, { key: 'add', onClick: function onClick() {
                    return _this4.toggleAddButtonSet();
                }, name: 'Add' }), _react2.default.createElement(_Button2.default, { key: 'delete', onClick: function onClick() {
                    return _this4.toggleDeleteButtonSet();
                }, name: 'Delete' })];
        }
    }]);

    return ButtonSet;
}(_react.Component);

;

exports.default = ButtonSet;