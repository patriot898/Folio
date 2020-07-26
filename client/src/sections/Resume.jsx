import React from 'react';

export default function Resume() {
  return (
    <section className="white-section container">

      <h2 className="section-title title-text">Resume</h2>
      <p className="general-text">
        Since childhood, I've always wanted to be an engineer. Before enrolling in a
        military academy to secure an engineering degree, I had no clue how oriented
        the role as an officer would be to project management and leadership!
        Following my honorable separation from the military, I chose to continue my
        pursuit to become an engineer and build functional applications and websites
        with just a laptop and an internet connection...and I love it!
      </p>
      <div className="resume-container">
        {/* Education */}
        <h3 className="title-text small-title">Education</h3>
        <div className="resume-block">
          <p className="resume-entry-title">Hack Reactor, San Francisco, California</p>
          <p className="resume-entry-date">2020</p>
          <p>Full Stack Software Engineering Immersive</p>
        </div>
        <div className="resume-block last-block">
          <p className="resume-entry-title">United States Military Academy, West Point, New York</p>
          <p className="resume-entry-date">2010 - 2014</p>
          <p>Bachelor of Science, Electrical Engineering</p>
        </div>
        {/* Work Experience */}
        <h3 className="title-text small-title">Work Experience</h3>
        <div className="resume-block">
          <p className="resume-entry-title">Hack Reactor, San Francisco, California</p>
          <p className="resume-entry-date">2020</p>
          <p>Full Stack Software Engineering Immersive</p>
        </div>
        <div className="resume-block last-block">
          <p className="resume-entry-title">United States Military Academy, West Point, New York</p>
          <p className="resume-entry-date">2010 - 2014</p>
          <p>Bachelor of Science, Electrical Engineering</p>
        </div>
        {/* Skills */}
        <h3 className="title-text small-title">Skills</h3>

      </div>

    </section>
  );
}
