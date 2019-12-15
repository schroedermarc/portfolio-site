import React from 'react';
import '../styles/CV2.scss';

export default function CV2() {
  return (
    <div className="CV-HTML">
      {/* left col */}

      <div className="cv-left">
        {/* experience */}
        <h2 className="cv-header">experience</h2>
        <div className="cv-content-block">
          {/*  */}
          <span className="cv-experience-location-position">
            Design Technologist (contract), Stamen Design, San Francisco, CA
          </span>
          <span className="cv-experience-timeframe">
            May 2019 to Present Day
          </span>
          <span className="cv-experience-description">
            Part Design Thinking. Part Data Science. Two Parts Web Development.
            Design technologist developing interactive maps and data
            visualizations on the web. Clients include UC Berkeley, The
            Berggruen Institute, Dropbox Inc., San Francisco State University,
            and the Bay Area Air Quality Management District.
          </span>
          {/*  */}
          <span className="cv-experience-location-position">
            Creative Code Instructor, Gray Area Foundation for the Arts, San
            Francisco, CA
          </span>
          <span className="cv-experience-timeframe">Ongoing</span>
          <span className="cv-experience-description">
            Teacher for the Web Audio week of the Gray Area Creative Code
            Immersive. Class covers basics of electronic music synthesis, music
            programming in Tone.js, and audio-visual interaction with p5.js.
          </span>
          {/*  */}
          <span className="cv-experience-location-position">
            Artist In Residence, Gray Area Foundation for the Arts, San
            Francisco, CA
          </span>
          <span className="cv-experience-timeframe">
            January 2019 to June 2019
          </span>
          <span className="cv-experience-description">
            Designed and developed immersive, room-scale installations blending
            physical computing, projection mapping, and sound design. Clients
            include Levy Dance and Google.
          </span>
          {/*  */}
          <span className="cv-experience-location-position">
            Technologist, Company Cue, New York, NY (Remote)
          </span>
          <span className="cv-experience-timeframe">
            June 2018 to April 2019
          </span>
          <span className="cv-experience-description">
            Developed web tools, processes and database management software for
            worldwide language translation and original marketing copy.
          </span>
          {/*  */}
          <span className="cv-experience-location-position">
            Curated Content and Data Producer, Music, Apple, Cupertino, CA
          </span>
          <span className="cv-experience-timeframe">May 2014 to May 2018</span>
          <span className="cv-experience-description">
            Project manager throughout launch of Apple Music, and Apple Music
            expansion launches in Israel, South Korea, Turkey, Taiwan, and
            others. From pre-launch to over 30 million paid subscribers around
            the world.
          </span>
          {/*  */}
          <span className="cv-experience-location-position">
            iTunes Programming & Label Relations Intern, Music, Apple,
            Cupertino, CA
          </span>
          <span className="cv-experience-timeframe">2013 to 2014</span>
        </div>

        {/* Technical Skills */}
        <h2 className="cv-header">technical skills</h2>
        <ul className="cv-list">
          <li className="cv-list-item">
            <b>Web Development Stack:</b> React.js, d3.js, Mapbox GL JS,
            Node.js, Parcel
          </li>
          <li className="cv-list-item">
            <b>Data Analysis:</b> Pandas for Python, Seaborn
          </li>
          <li className="cv-list-item">
            <b>Creative Code:</b> Processing (Java), p5.js, Tone.js,
            Arduino/Physical Computing, Ableton Live
          </li>
        </ul>

        {/* Digital Art Exhibitions */}
        <h2 className="cv-header">digital art exhibitions</h2>
        <ul className="cv-list">
          <li className="cv-list-item">
            <b>MUTEK.SF</b> - Elevator Pitch (A/V Installation) — May 2019
          </li>
          <li className="cv-list-item">
            <b>Gray Area Showcase 2019.1</b> - Core (A/V Installation) — June
            2019
          </li>
          <li className="cv-list-item">
            <b>Rush V.1</b> - Entrance (A/V Installation) — June 2019
          </li>
          <li className="cv-list-item">
            <b>Gray Area Showcase 2018.2</b> - Elevator Pitch (A/V Installation)
            — December 2018
          </li>
        </ul>

        {/* education */}
        <h2 className="cv-header">education</h2>
        <div className="cv-content-block">
          <span className="cv-education">
            University of Kansas, Lawrence, Kansas — B.S. Computer Science, 2014
          </span>
        </div>
      </div>

      {/* right col */}
      <div className="cv-right">
        <div className="cv-contact-info">
          <span className="cv-info-line">San Francisco, CA </span>
          <span className="cv-info-line">(415) 314-9862</span>
          <span className="cv-info-line">marcschroeder44@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
