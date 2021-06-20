import React from 'react';
import '../styles.css';

const ImageGaleeryItem = props => {
    const { src, alt, largeImgUrl } = props;
    return <li className="ImageGalleryItem">
        <img src={src} alt={alt} data-url={largeImgUrl} className="ImageGalleryItem-image" />
    </li>
}

export default ImageGaleeryItem