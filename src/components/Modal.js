import React from 'react';

const Modal = props => {
    const { src, alt } = props;
    return <div className="Overlay">
        <div className="Modal">
            <img src={src} alt={alt} />
        </div>
    </div>
}

export default Modal;