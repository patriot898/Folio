import React from 'react';
import DownloadButton from '../components/DownloadButton.jsx';

export default function Bio() {
  return (

    <section id="bio" className="white-section container">
      <h2 id="bio-header" className="section-title title-text">Hello</h2>
      <p className="general-text">I am an Army Signal Corps Veteran turned Full Stack Software Engineer. I love developing robust and modern web and mobile applications while translating design and theory to practice. My past experience as a military officer imbued me with the communication and management skills absolutely essential to be an effective leader and team player. </p>
      <DownloadButton />

    </section>
  );
}
