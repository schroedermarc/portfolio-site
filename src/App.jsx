import React, { useEffect, useState } from 'react';
import './App.scss';
import Gallery from './containers/Gallery';
import ProjectView from './containers/ProjectView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  const [projectLoaded, setProjectLoaded] = useState(false);

  const handleGalleryItemSelect = slug => {
    props.history.push(`/${slug}`);
    setProjectLoaded(true);
  };

  // probably delete this later
  const navSelect = () => {
    props.history.push('/');
  };

  return (
    <div className="App">
      <div className="home-left-panel" onClick={navSelect}>
        left panel
      </div>
      <div className="home-right-panel">
        <Switch>
          <Route
            path={'/'}
            exact
            render={props => (
              <Gallery
                {...props}
                handleGalleryItemSelect={handleGalleryItemSelect}
              />
            )}
          />
          <Route path={'/:slug'} render={props => <ProjectView {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
