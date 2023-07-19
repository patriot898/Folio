import React from 'react';
import SocialBar from '../components/SocialBar.jsx';
import { IMAGE_BASE_LOCATIONS, JOB_LOCATION } from '../site_info/constants';

const { HEADSHOT } = IMAGE_BASE_LOCATIONS;

const MainHeader = () => (
  <header id="main-header">
    <div id="top-section" className="container">
      <div id="avatar-container">
        <picture>
          <source srcSet={`${HEADSHOT}.webp`} type="image/webp" />
          <source srcSet={`${HEADSHOT}.jpeg`} type="image/jpeg" />
          <img id="avatar-image" src={`${HEADSHOT}.jpeg`} alt="kiefer-ragay" width="430" height="380" />
        </picture>
      </div>
      <div id="contact-container">
        <p className="personal-name">Kiefer Ragay</p>
        <p className="personal-job">full stack software engineer</p>
        <dl>
          <dt>AGE:</dt>
          <dd>31</dd>
          <dt>LOCATION:</dt>
          <dd>{JOB_LOCATION}</dd>
        </dl>
        <SocialBar />
      </div>
    </div>
  </header>
);

export default MainHeader;
