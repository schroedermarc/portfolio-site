import React from 'react';
import '../styles/GalleryItem.scss';
import goat from '../images/goat.jpeg';
import { serializers } from '../utils/sanityIO';

const BlockContent = require('@sanity/block-content-to-react');

export default function GalleryItem(props) {
  return (
    <div className="gallery-item">
      <div className="gallery-item-left-panel">
        <img className="gallery-item-cover-photo" src={goat}></img>
      </div>
      <div className="gallery-item-right-panel">
        <div className="gallery-item-title-container">
          <h2>{props.data.title}</h2>
          <BlockContent
            blocks={props.data.thumbnailText}
            serializers={serializers}
          />
        </div>
      </div>
    </div>
  );
}
