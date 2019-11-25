import React, { useEffect } from 'react';
import '../styles/GalleryItem.scss';
import { client, serializers, urlFor } from '../utils/sanityIO';
import * as d3 from 'd3-selection';

const BlockContent = require('@sanity/block-content-to-react');

export default function GalleryItem(props) {
  const SLUG = props.data.slug.current;

  const itemClicked = () => {
    props.handleItemClick(SLUG);
  };

  const url = urlFor(props.data.mainImage)
    .width(1200)
    .height(400)
    .blur(80)
    .url();

  useEffect(() => {
    const sel = d3
      .select(`#gallery-item-${SLUG}`)
      .style('background-image', `url("${url}")`);
  });

  let catTags;
  if (props.data.categories) {
    catTags = props.data.categories.join(' / ');
  } else {
    catTags = 'MISC';
  }

  return (
    <div
      className="gallery-item"
      id={`gallery-item-${SLUG}`}
      onClick={itemClicked}
    >
      <div className="gallery-item-center-text-container">
        <div className="gallery-item-project-category-container">{catTags}</div>

        <div className="gallery-item-title-and-subtitle-container">
          <div className="gallery-item-title-container">
            <h2>{props.data.title}</h2>
          </div>
          <div className="gallery-item-subtitle-container">
            <BlockContent
              blocks={props.data.thumbnailText}
              serializers={serializers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
