import React from 'react';
import '../styles/GalleryItem.scss';
import { client, serializers } from '../utils/sanityIO';
import imageUrlBuilder from '@sanity/image-url';

const BlockContent = require('@sanity/block-content-to-react');
const builder = imageUrlBuilder(client);

export default function GalleryItem(props) {
  const itemClicked = () => {
    props.handleItemClick(props.data.slug.current);
  };

  const urlFor = source => {
    return builder.image(source);
  };

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
