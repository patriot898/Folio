import React from 'react';
import DownloadButton from '../components/DownloadButton.jsx';

export default function Bio() {
  return (

    <section id="bio" className="white-section container">
      <h2 id="bio-header" className="section-title title-text">Hello</h2>
      <p className="general-text">United States Army (USA) Signal Corps Veteran turned Full Stack Software Engineer. I develop modern and robust web and mobile applications while translating design and theory to practice. My past experience as a military officer taught me the interpersonal communication and management skills essential to be an effective leader and collaborator. Combined with a natural inclination towards technology, my skillset makes me an effective player on any tech team.</p>
      <DownloadButton />

    </section>
  );
}
