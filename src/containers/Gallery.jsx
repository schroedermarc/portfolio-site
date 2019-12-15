import React, { useEffect, useState } from 'react';
import { client } from '../utils/sanityIO';
import GalleryItem from '../components/GalleryItem';

export default function Gallery(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query =
      '*[_type == "project"]{ "categories": categories[]->title, _id, slug, mainImage, title, thumbnailText, body}';
    const params = {};

    client.fetch(query, params).then(results => {
      setProjects(results);
    });
  }, []);

  const handleItemClick = slug => {
    props.handleGalleryItemSelect(slug);
  };

  const galleryItemList = projects.map(el => {
    return (
      <GalleryItem key={el._id} data={el} handleItemClick={handleItemClick} />
    );
  });

  return <div className="gallery-container">{galleryItemList}</div>;
}

//_id, slug, mainImage, title, thumbnailText, body