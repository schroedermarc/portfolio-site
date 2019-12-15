import React, { useEffect, useState } from 'react';
import './App.scss';
import Gallery from './containers/Gallery';
import ProjectView from './containers/ProjectView';
import NavBar from './containers/NavBar';
import CVView from './containers/CVView';
import CV2 from './containers/CV2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  const [projectLoaded, setProjectLoaded] = useState(false);
  const urlPath = props.location.pathname.split('/')[1];

  const handleGalleryItemSelect = slug => {
    props.history.push(`/${slug}`);
    setProjectLoaded(true);
  };

  // probably delete this later
  const navSelect = () => {
    // props.history.push('/');
  };

  let pageNumber;
  switch (urlPath) {
    case '':
      pageNumber = 0;
      break;
    case 'cv':
      pageNumber = 1;
      break;
    default:
      pageNumber = 0;
      break;
  }

  return (
    <div className="App">
      {/* <div className="home-left-panel" onClick={navSelect}> */}
      <NavBar selectedValue={pageNumber} />
      {/* </div> */}
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
          <Route path={'/cv'} component={CV2} />
          <Route
            path={'/:slug'}
            exact
            render={props => <ProjectView {...props} />}
          />
        </Switch>
      </div>
      <div className="app-footer">
        {' '}
        ©Copyright Marc Schroeder 2019 - Site made with Sanity.io and React.js{' '}
      </div>
    </div>
  );
}

export default App;
