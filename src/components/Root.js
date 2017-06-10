import React from 'react';
import _ from 'lodash';

import Tree from './Tree';

const Root = ({state}) => {

    const paths = _.keys(state);

    return (
        <div className='state'>
            {
                _.map(
                    paths,
                    path => <Tree state={state} path={[path]} key={path}/>
                )
            }
        </div>
    );
}

export default Root;
