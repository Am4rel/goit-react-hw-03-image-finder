import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import '../styles.css';

const ImageGallery = props => {
    return <ul className="ImageGallery">
        {props.list.map(listItem => {
            let { webformatURL, tags, largeImageURL, id } = listItem;
            return <ImageGalleryItem key={id} src={webformatURL} alt={tags} largeImgUrl={largeImageURL} />
        })}
    </ul>
}

export default ImageGallery;