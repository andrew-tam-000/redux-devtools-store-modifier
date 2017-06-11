import React from 'react';
import _ from 'lodash';

import Branch from './Branch';
import Leaf from './Leaf';

const Tree = ({state, path, dispatch}) => {

    const value = _.get(state, path);

    const hasKeys = _.isObjectLike(value) && _.size(value);

    return (
        <div className='state__tree'>
            {
                hasKeys ? (
                    <Branch dispatch={dispatch} state={state} path={path}/>
                ) : (
                    <Leaf dispatch={dispatch} state={state} path={path} />
                )
            }
        </div>
    );
}

export default Tree;
