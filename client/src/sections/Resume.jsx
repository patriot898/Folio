import React from 'react';
import ResumeTimeline from '../components/ResumeTimeline.jsx';
// eslint-disable-next-line import/extensions
import resumeInfo from '../site_info/resumeInfo.js';

export default function Resume() {
  return (
    <section className="white-section container" id="resume">

      <h2 className="section-title title-text">Resume</h2>
      <p className="general-text">
      Before enrolling in a military academy to secure an engineering
      degree, I had no clue that the officer role would be less about
      hands-on engineering and more about management and leadership skills.
      Following the completion of my military service
        obligation, I chose to continue my pursuit
        to become a full-fledged engineer and build functional
        applications and websites. With just a laptop and a stable
        internet connection, I believe a software engineer has all the
        tools he or she needs to learn and build applications that can
        improve the quality of life of those around them. No expensive lab
        or equipment necessary!
      </p>
      <div className="timelines-container">
        {/* Education */}
        <ResumeTimeline title={'Education'} timeline={resumeInfo.educationTimeline} />
        {/* Work Experience */}
        <ResumeTimeline title={'Work Experience'} timeline={resumeInfo.experienceTimeline} />
      </div>
    </section>
  );
}
