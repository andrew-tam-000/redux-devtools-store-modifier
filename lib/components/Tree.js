import React from 'react';
import _ from 'lodash';

import Branch from './Branch';
import Leaf from './Leaf';

import { connect } from 'react-redux';

const Tree = ({ state, path }) => {

    const value = _.get(state, path);

    const hasKeys = _.isObjectLike(value) && _.size(value);

    return React.createElement(
        'div',
        { className: 'state__tree' },
        hasKeys ? React.createElement(Branch, { path: path }) : React.createElement(Leaf, { path: path })
    );
};

export default connect(state => ({ state }))(Tree);