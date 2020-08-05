import React from 'react';
import SkillBox from '../components/SkillBox.jsx';
import ResumeTimeline from '../components/ResumeTimeline.jsx';
// eslint-disable-next-line import/extensions
import resumeInfo from './resumeInfo.js';

export default function Resume() {
  return (
    <section className="white-section container" id="resume">

      <h2 className="section-title title-text">Resume</h2>
      <p className="general-text">
        Before enrolling in a military academy to secure an engineering
        degree, I had no clue how oriented the role as an officer would be
        to project management and leadership! Following the completion of
        my military service obligation, I chose to continue my pursuit
        to become a full-fledged engineer and build functional
        applications and websites. With just a laptop and a stable
        internet connection, a software engineer has all the tools he
        needs to build applications that can improve the quality of
        life of those around him. No expensive lab or equipment
        necessary!
      </p>
      <div className="timelines-container">
        {/* Education */}
        <ResumeTimeline title={'Education'} timeline={resumeInfo.educationTimeline} />
        {/* Work Experience */}
        <ResumeTimeline title={'Work Experience'} timeline={resumeInfo.experienceTimeline} />
        {/* Skills */}
        <h3 className="title-text small-title">Skills</h3>

      </div>
      <SkillBox skills={resumeInfo.skills} />

    </section>
  );
}
