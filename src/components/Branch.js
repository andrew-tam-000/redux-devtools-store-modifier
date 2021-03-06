import React, { Component } from 'react';
import _ from 'lodash';
import Tree from './Tree';
import ButtonSet from './ButtonSet';

class Branch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    render() {
        const { state, path, dispatch } = this.props;

        const keys = _.keys(_.get(state, path));

        const contentClassName = _.compact([
            'state__branch-content',
            ...( this.state.open ? [] : ['state__branch-content--hide'])
        ]).join(' ');

        const icon  = this.state.open ? (
            String.fromCharCode(8722)
        ) : (
            '+'
        );

        const labelClassname = [
            'state__branch-label',
            this.state.open ? (
                'state__branch-label--open'
            ) : (
                'state__branch-label--close'
            )
        ].join(' ');


        return (
            <div className='state__branch'>
                <div className='state__branch-row'>
                    <div onClick={() => this.setState({open: !this.state.open})} className={labelClassname}>
                        <span className='state__branch-label-icon'>
                            { icon } 
                        </span>
                        <span className='state__branch-label-name'>
                            { _.last(path) }
                        </span>
                    </div>
                    <ButtonSet dispatch={dispatch} state={state} path={path} />
                </div>
                {
                    this.state.open ? (
                        <div className={contentClassName}>
                            {
                                _.map(
                                    keys,
                                    key => <Tree dispatch={dispatch} state={state} path={[...path, key]} />
                                )
                            }
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        );
    }
}

export default Branch;
