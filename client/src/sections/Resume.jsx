import React from 'react';
import SkillsBox from '../components/SkillsBox.jsx';
import ResumeTimeline from '../components/ResumeTimeline.jsx';
import resumeInfo from './resumeInfo.js';

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
      <div className="timelines-container">
        {/* Education */}
        <ResumeTimeline title={'Education'} timeline={resumeInfo.educationTimeline} />
        {/* Work Experience */}
        <ResumeTimeline title={'Work Experience'} timeline={resumeInfo.experienceTimeline} />
        {/* Skills */}
        <h3 className="title-text small-title">Skills</h3>

      </div>
        <SkillsBox skills={resumeInfo.skills} />

    </section>
  );
}
