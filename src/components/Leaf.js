import React, { Component } from 'react';
import _ from 'lodash';
import { updateStore }from '../redux/actions';

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

        const value = this.state.listening ? (
            this.getValueFromStore()
        ) : (
            this.state.value
        );

        return (
            <div className='state__leaf'>
                <div className='state__leaf-label'>
                    { _.last(path) }
                </div>
                <input
                    onBlur={ () => this.dispatchChange(path, this.state.value) }
                    onFocus={ () => this.toggleListening(false) }
                    onChange={ e => this.updateInput(e) }
                    className='state__leaf-content'
                    value={value}
                />
            </div>
        );
    }

    dispatchChange(...args) {
        this.props.dispatch(updateStore(...args));
        this.toggleListening(true);
    }

    getValueFromStore() {
        const { state, path } = this.props;
        return _.get(state, path);
    }

    updateInput(e) {
        const value = e.target.value;
        this.setState({ value })
    }

    toggleListening(force) {
        this.setState({listening: ( force === true || force === false ) ? force : !this.state.listening});
    }
}

export default Leaf;
