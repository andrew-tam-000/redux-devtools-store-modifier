import React from 'react';
import _ from 'lodash';
import Tree from './Tree';

const styles = `
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.state {
    color: #a1c659;
    overflow-y: auto;
}

.state__branch {
    padding-left: 10px;
}

.state__leaf {
    overflow: hidden;
    padding-left: 10px;
}

.state__leaf-content {
    background-color: transparent;
    margin-left: 10px;
    color: #6fb3d2;
    float: left;
    font-weight: 600;
}

.state__leaf-label {
    float: left;
}

.state__branch-content.state__branch-content--hide {
    display: none;
}
`;

const Root = ({state, dispatch}) => {

    const paths = _.keys(state);

    return (
        <div className='state'>
            <style>
                {styles}
            </style>
            {
                _.map(
                    paths,
                    path => <Tree dispatch={dispatch} state={state} path={[path]} key={path}/>
                )
            }
        </div>
    );
}

export default Root;
