import React from 'react';

const Button = ({state, path, dispatch, name, onClick}) => (
    <div className='state__button' onClick={onClick}>
        { name }
    </div>
);

export default Button;
