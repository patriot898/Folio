import React from 'react';
import SocialBar from '../components/SocialBar.jsx';
import { IMAGE_BASE_LOCATIONS, JOB_LOCATION } from '../site_info/constants';

const { HEADSHOT_BW } = IMAGE_BASE_LOCATIONS;

const MainHeader = () => (
  <header id="main-header">
    <div id="top-section" className="container">
      <div id="avatar-container">
        <picture>
          <source srcSet={`${HEADSHOT_BW}.webp`} type="image/webp" />
          <source srcSet={`${HEADSHOT_BW}.jpg`} type="image/jpeg" />
          <img id="avatar-image" src={`${HEADSHOT_BW}.jpg`} alt="kiefer-ragay" width="280" height="380" />
        </picture>
      </div>
      <div id="contact-container">
        <p className="personal-name">Kiefer Ragay</p>
        <p className="personal-job">full stack software engineer</p>
        <dl className="contact-table">
          <dt className="contact-term">AGE:</dt>
          <dd className="contact-value">31</dd>
          <dt className="contact-term">LOCATION:</dt>
          <dd className="contact-value">{JOB_LOCATION}</dd>
        </dl>
        <SocialBar />
      </div>
    </div>
  </header>
);

export default MainHeader;
