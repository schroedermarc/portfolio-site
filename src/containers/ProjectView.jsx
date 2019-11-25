import React, { useEffect, useState } from 'react';
import { client, serializers, urlFor } from '../utils/sanityIO';
import '../styles/ProjectView.scss';
import imageUrlBuilder from '@sanity/image-url';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import goat from '../images/goat.jpeg';

const BlockContent = require('@sanity/block-content-to-react');

export default function ProjectView(props) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "project" && slug.current == "${props.match.params.slug}"]`;
    const params = {};

    client.fetch(query, params).then(results => {
      console.log(results);

      if (results.length === 1) {
        setProjectData(results[0]);
      } else {
        setProjectData([]);
      }
    });
  }, []);

  let pageContent;
  if (!projectData) {
    // loading state
    pageContent = <div>loading...</div>;
  } else if (projectData.hasOwnProperty('title')) {
    // display project info

    // gather images from data
    const carouselImgJSX = projectData.carouselImages.map(el => {
      const url = urlFor(el).url();
      return (
        <div>
          <img className="project-carousel-image" src={url} />
        </div>
      );
    });

    pageContent = (
      <div>
        <h1>{projectData.title}</h1>
        <BlockContent blocks={projectData.body} serializers={serializers} />
        <Carousel>{carouselImgJSX}</Carousel>
      </div>
    );
  } else {
    // project not found
    pageContent = <div>four oh four</div>;
  }

  return <div>{pageContent}</div>;
}
