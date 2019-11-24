import React, { useEffect, useState } from 'react';
import './App.scss';
import { client } from './utils/sanityIO';
import GalleryItem from './components/GalleryItem';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "project"]';
    const params = {};

    client.fetch(query, params).then(results => {
      console.log(results);
      setProjects(results);
    });
  }, []);

  const tempProjectsDiv = projects.map(el => {
    return <GalleryItem key={el._id} data={el} />;
  });

  return (
    <div className="App">
      <div className="home-left-panel">left panel</div>
      <div className="home-right-panel">{tempProjectsDiv}</div>
    </div>
  );
}

export default App;
