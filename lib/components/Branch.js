import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Tree from './Tree';

class Branch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    render() {
        const { state, path } = this.props;

        const keys = _.keys(_.get(state, path));

        const contentClassName = _.compact(['state__branch-content', ...(this.state.open ? [] : ['state__branch-content--hide'])]).join(' ');

        const icon = this.state.open ? String.fromCharCode(8722) : '+';

        return React.createElement(
            'div',
            { className: 'state__branch' },
            React.createElement(
                'div',
                { onClick: () => this.setState({ open: !this.state.open }), className: 'state__branch-label' },
                icon,
                ' ',
                _.last(path)
            ),
            React.createElement(
                'div',
                { className: contentClassName },
                _.map(keys, key => React.createElement(Tree, { path: [...path, key] }))
            )
        );
    }
}

export default connect(state => ({ state }))(Branch);