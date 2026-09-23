import React from 'react'
import '../styles/CV2.scss'

export default function CV2() {
  return (
    <div className="CV-HTML">
      {/* left col */}

      <div className="cv-left">
        {/* experience */}
        <h2 className="cv-header">experience</h2>
        <div className="cv-content-block">
          {/*  */}

          <div className="experience-block">
            <span className="experience-block__timeframe">
              May 2019 to Present Day
            </span>
            <span className="experience-block__location-position">
              Design Technologist (contract), Stamen Design, San Francisco, CA
            </span>
            <span className="experience-block__description">
              Part Design Thinking. Part Data Science. Two Parts Web
              Development. Design technologist developing interactive maps and
              made-to-order data visualizations on the web. Clients include The
              Bill and Melinda Gates Foundation, Johnson & Johnson, UC Berkeley,
              The Berggruen Institute, Dropbox Inc.
            </span>
          </div>
          {/*  */}
          <div className="experience-block">
            <span className="experience-block__timeframe">Ongoing</span>
            <span className="experience-block__location-position">
              Creative Code Instructor, Gray Area Foundation for the Arts, San
              Francisco, CA
            </span>
            <span className="experience-block__description">
              Teacher for the Web Audio and 3D envioronments weeks of the Gray
              Area Creative Code Immersive. Web Audio covers basics of
              electronic music synthesis, music programming in Tone.js, and
              audio-visual interaction with p5.js. 3D Environments covers
              creating VR-ready 3D worlds with A-FRAME.
            </span>
          </div>
          {/*  */}
          <div className="experience-block">
            <span className="experience-block__timeframe">
              January 2019 to June 2019
            </span>
            <span className="experience-block__location-position">
              Artist In Residence, Gray Area Foundation for the Arts, San
              Francisco, CA
            </span>
            <span className="experience-block__description">
              Designed and developed immersive, room-scale installations
              blending physical computing, projection mapping, and sound design.
              Clients include Levy Dance and Google.
            </span>
          </div>
          {/*  */}
          <div className="experience-block">
            <span className="experience-block__timeframe">
              June 2018 to April 2019
            </span>
            <span className="experience-block__location-position">
              Technologist, Company Cue, New York, NY (Remote)
            </span>
            <span className="experience-block__description">
              Developed web tools, processes and database management software
              for worldwide language translation and original marketing copy.
            </span>
          </div>
          {/*  */}
          <div className="experience-block">
            <span className="experience-block__timeframe">
              May 2014 to May 2018
            </span>
            <span className="experience-block__location-position">
              Curated Content and Data Producer, Music, Apple, Cupertino, CA
            </span>
            <span className="experience-block__description">
              Project manager throughout launch of Apple Music, and Apple Music
              expansion launches in Israel, South Korea, Turkey, Taiwan, and
              others. From pre-launch to over 30 million paid subscribers around
              the world.
            </span>
          </div>
          {/*  */}
          <div className="experience-block">
            <span className="experience-block__timeframe">2013 to 2014</span>
            <span className="experience-block__location-position">
              iTunes Programming & Label Relations Intern, Music, Apple,
              Cupertino, CA
            </span>
          </div>
        </div>

        {/* Technical Skills */}
        <h2 className="cv-header">technical skills</h2>
        <ul className="cv-list">
          <li className="cv-list-item">
            <b>Web Development Stack:</b> Modern Javascript tools - React and
            Vue, Webpack, Node, Mapbox GLJS, D3.js, Firebase, Heroku + more.
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
  )
}
