import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { updateStore } from '../redux/actions';

class Leaf extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: _.get(props.state, props.path),
            listening: true
        };
    }

    render() {
        const { path } = this.props;

        const value = this.state.listening ? this.getValueFromStore() : this.state.value;

        return React.createElement(
            'div',
            { className: 'state__leaf' },
            React.createElement(
                'div',
                { className: 'state__leaf-label' },
                _.last(path)
            ),
            React.createElement('input', {
                onBlur: () => this.dispatchChange(path, this.state.value),
                onFocus: () => this.toggleListening(false),
                onChange: e => this.updateInput(e),
                className: 'state__leaf-content',
                value: value
            })
        );
    }

    dispatchChange(...args) {
        this.props.dispatchChange(...args);
        this.toggleListening(true);
    }

    getValueFromStore() {
        const { state, path } = this.props;
        return _.get(state, path);
    }

    updateInput(e) {
        const value = e.target.value;
        this.setState({ value });
    }

    toggleListening(force) {
        this.setState({ listening: force === true || force === false ? force : !this.state.listening });
    }
}

export default connect(state => ({ state }), dispatch => ({
    dispatchChange: (...args) => {
        dispatch(updateStore(...args));
    }
}))(Leaf);