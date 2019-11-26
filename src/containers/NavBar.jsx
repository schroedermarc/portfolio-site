import React, { useEffect } from 'react';
import '../styles/NavBar.scss';
import { setNav } from '../utils/navUtils';
import { Link } from 'react-router-dom';
import * as d3 from 'd3-selection';

export default function NavBar(props) {
  const items = ['#projects-nav-link', '#cv-nav-link'];

  React.useEffect(() => {
    //clear selected class from all links
    items.forEach(item => {
      d3.select(item).classed('nav-is-selected', false);
    });

    // now add to selected one
    d3.select(items[props.selectedValue]).classed('nav-is-selected', true);

    setNav(props.selectedValue);
  }, [props.selectedValue]);

  const handleContactClicked = () => {
    console.log('email me!');
  };

  return (
    <div className="nav-bar-container">
      <div className="nav-bar-branded-area">Marc Schroeder</div>
      <div className="nav-links-container">
        <ul id="nav">
          <li className="nav-link-li">
            <Link to={`/`}>
              <div className="nav-link" id="projects-nav-link">
                Projects
              </div>
            </Link>
          </li>
          <li className="nav-link-li">
            <Link to={`/cv`}>
              <div className="nav-link" id="cv-nav-link">
                CV
              </div>
            </Link>
          </li>
          <div className="nav-slider" id="nav-slide-click"></div>
        </ul>
        <div className="contact-button" onClick={handleContactClicked}>
          CONTACT
        </div>
      </div>
    </div>
  );
}
