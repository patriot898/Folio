import React from 'react';

const MainHeader = () => (
    <header id="main-header">
      <div id="top-section" className="container">
          <div id="avatar-container">
            <img id="avatar-image" src="headshot-avatar-bw.jpg"></img>
          </div>
          <div id="contact-container">
            <p className="personal-name">Kiefer Ragay</p>
            <p className="personal-job">full stack software engineer</p>
            <dl className="contact-table">
              <dt className="contact-term">AGE:</dt>
              <dd className="contact-value">28</dd>
              <dt className="contact-term">PHONE:</dt>
              <dd className="contact-value">+1 (315) 274-2860</dd>
              <dt className="contact-term">EMAIL:</dt>
              <dd className="contact-value">kiefer.m.ragay@gmail.com</dd>
              <dt className="contact-term">LOCATION:</dt>
              <dd className="contact-value">San Francisco, CA</dd>
            </dl>
          </div>
      </div>
    </header>
);

export default MainHeader;
