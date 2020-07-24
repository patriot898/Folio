import React from 'react';
import Button from 'react-bootstrap/Button';


export default function Bio() {
  return (

    <section id="bio" className="white-section container">
      {/* <style type="text/css">
        {
          `.btn-download {
          background-color: rgba(213, 216, 55, .95);
          color: white;
          }`
        }
      </style> */}
      <h2 id="bio-header" className="section-title">Hello</h2>
      <p className="general-text">I am an Army Signal Corps Veteran turned Full Stack Software Engineer. I love developing robust and modern web and mobile applications while translating design and theory to practice. My past experience as a military officer imbued me with the communication and management skills absolutely essential to be an effective leader and team player. </p>
      <Button variant="download" size="large">

        Download Resume
        </Button>
    </section>
  )
}

