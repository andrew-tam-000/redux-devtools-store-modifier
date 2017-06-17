import React, { Component } from 'react';
import Button from './Button';
import { updateStore }from '../redux/actions';

class ButtonSet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addConfirm: false,
            deleteConfirm: false,
            contentToAdd: ''
        };
    }

    render() {
        return (
            <div className='state__button-set'>
                {
                    this.state.addConfirm ? (
                        this.renderAddButtonSet()
                    ) : this.state.deleteConfirm ? (
                        this.renderDeleteButtonSet()
                    ) : (
                        this.renderDefaultButtonSet()
                    )
                }
            </div>
        );
    }

    toggleAddButtonSet() {
        this.setState({addConfirm: !this.state.addConfirm});
    }

    toggleDeleteButtonSet() {
        this.setState({deleteConfirm: !this.state.deleteConfirm});
    }

    deleteBranch() {
        this.props.dispatch(
            updateStore(this.props.path, null)
        );
    }

    addBranch() {
        this.props.dispatch(
            updateStore(this.props.path, this.state.contentToAdd)
        );
    }

    updateAddContent(e) {
        this.setState({
            contentToAdd: e.target.value
        });
    }

    renderDeleteButtonSet() {
        return [
            <Button key='confirm' onClick={() => this.deleteBranch() } name='Confirm'/>,
            <Button key='cancel' onClick={() => this.toggleDeleteButtonSet() } name='Cancel'/>
        ]
    }

    confirmAdd() {
        this.addBranch();
        this.toggleAddButtonSet();
    }

    renderAddButtonSet() {
        return [
            <input className='state__input' onChange={ e => this.updateAddContent(e) } value={this.state.contentToAdd} ref={ input => input && input.focus() }/>,
            <Button key='confirm' onClick={() => this.confirmAdd() } name='Confirm'/>,
            <Button key='cancel' onClick={() => this.toggleAddButtonSet()} name='Cancel'/>
        ]
    }

    renderDefaultButtonSet() {
        return [
            <Button key='add' onClick={() => this.toggleAddButtonSet() } name='Add'/>,
            <Button key='delete' onClick={() => this.toggleDeleteButtonSet()} name='Delete'/>
        ]
    }

};

export default ButtonSet;
