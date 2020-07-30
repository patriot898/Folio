import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SkillBox({ skills }) {
  const firstSkills = [];
  const lastSkills = [];
  for (let i = 0; i <= Math.ceil(skills.length / 2 - 1); i += 1) {
    firstSkills.push(skills[i]);
  }

  for (let j = Math.ceil(skills.length / 2); j < skills.length; j += 1) {
    lastSkills.push(skills[j]);
  }

  return (
    <div className="skillbox">
      <div className="skill-column">
        {firstSkills.map((skill, idx) => <div key={idx}>
          <p className="skill-name">
            <span>{skill.name}</span>
            <span className="right">{skill.level}%</span>
          </p>
          <ProgressBar now={skill.level} />
        </div>)}
      </div>

      <div className="skill-column">
        {lastSkills.map((skill, idx) => <div key={idx}>
          <p className="skill-name">
            <span>{skill.name}</span>
            <span className="right">{skill.level}%</span>
          </p>
          <ProgressBar now={skill.level} />
        </div>)}
      </div>
    </div>
  );
}
