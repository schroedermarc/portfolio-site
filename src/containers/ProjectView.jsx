import React, { useEffect, useState } from 'react';
import { client, serializers } from '../utils/sanityIO';
import '../styles/ProjectView.scss';

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
    pageContent = (
      <div>
        <h1>{projectData.title}</h1>
        <BlockContent blocks={projectData.body} serializers={serializers} />
      </div>
    );
  } else {
    // project not found
    pageContent = <div>four oh four</div>;
  }

  return <div>{pageContent}</div>;
}
