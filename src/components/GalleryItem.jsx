import React from 'react';
import '../styles/GalleryItem.scss';
import { client, serializers, urlFor } from '../utils/sanityIO';

const BlockContent = require('@sanity/block-content-to-react');

export default function GalleryItem(props) {
  const itemClicked = () => {
    props.handleItemClick(props.data.slug.current);
  };

  console.log(props.data.mainImage);

  return (
    <div className="gallery-item" onClick={itemClicked}>
      <div className="gallery-item-left-panel">
        <img
          className="gallery-item-cover-photo"
          src={urlFor(props.data.mainImage)
            .width(300)
            .height(300)
            .url()}
        />
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
