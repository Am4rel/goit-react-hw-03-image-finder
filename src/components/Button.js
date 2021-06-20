import React from 'react';
import '../styles.css'

const Button = props => {
    return <button type='button' className='Button' onClick={props.onBtnPress}>Load more</button>
}

export default Button;