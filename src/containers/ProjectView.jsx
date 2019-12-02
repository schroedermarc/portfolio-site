import React, { useEffect, useState } from 'react';
import { client, serializers, urlFor } from '../utils/sanityIO';
import '../styles/ProjectView.scss';
import { Carousel } from 'react-responsive-carousel';
import { getCategoryTextClass } from '../utils/colorUtils';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const BlockContent = require('@sanity/block-content-to-react');

export default function ProjectView(props) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "project" && slug.current == "${props.match.params.slug}"]{title, carouselImages, body, link, shownAt, year, client,  "categories": categories[]->title}`;
    const params = {};

    client.fetch(query, params).then(results => {
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
        <div key={el._key}>
          <img className="project-carousel-image" src={url} />
        </div>
      );
    });

    // gather data from info fields and turn into table
    const fieldsList = [
      ['year', 'Year: '],
      ['client', 'Client: '],
      ['link', 'Link: '],
      ['shownAt', 'Shown At: '],
    ];

    const infoTableItems = fieldsList.map(field => {
      const [fieldName, fieldLabel] = field;
      if (projectData[fieldName]) {
        if (fieldName === 'link') {
          return (
            <div className={`project-info-table-cell`} key={fieldName}>
              {<b>Link: </b>}{' '}
              <a
                href={projectData[fieldName]}
                target="_blank"
                style={{ color: 'white' }}
              >
                {projectData[fieldName]}
              </a>
            </div>
          );
        } else {
          return (
            <div className={`project-info-table-cell`} key={fieldName}>
              {<b>{fieldLabel}</b>} {projectData[fieldName]}
            </div>
          );
        }
      }
    });

    pageContent = (
      <div className="page-content-container">
        <span className="page-content-title">{projectData.title}</span>

        <div className="project-info-table">
          <span
            className={`project-info-category ${getCategoryTextClass(
              projectData.categories[0]
            )}`}
          >
            {projectData.categories[0]}
          </span>
          {infoTableItems}
        </div>

        <div className="page-content-body">
          <BlockContent blocks={projectData.body} serializers={serializers} />
        </div>
        <Carousel className="images-carousel" dynamicHeight>
          {carouselImgJSX}
        </Carousel>
      </div>
    );
  } else {
    // project not found
    pageContent = <div>four oh four</div>;
  }

  return <div>{pageContent}</div>;
}
