import React from 'react';
import _ from 'lodash';

import Tree from './Tree';

const Root = ({ state }) => {

    const paths = _.keys(state);

    return React.createElement(
        'div',
        { className: 'state' },
        _.map(paths, path => React.createElement(Tree, { state: state, path: [path], key: path }))
    );
};

export default Root;