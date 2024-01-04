import React, { useEffect, useState } from 'react';
import { client } from '../utils/sanityIO';
import GalleryItem from '../components/GalleryItem';

export default function Gallery(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query =
      '*[_type == "project" && slug.current != "oof"]{ "categories": categories[]->title, _id, slug, mainImage, title, thumbnailText, body, year} | order(year desc)';
    const params = {};

    client.fetch(query, params).then((results) => {
      setProjects(results);
    });
  }, []);

  const handleItemClick = (slug) => {
    props.handleGalleryItemSelect(slug);
  };

  const galleryItemList = projects.map((el) => {
    return (
      <GalleryItem key={el._id} data={el} handleItemClick={handleItemClick} />
    );
  });

  return <div className="gallery-container">{galleryItemList}</div>;
}
