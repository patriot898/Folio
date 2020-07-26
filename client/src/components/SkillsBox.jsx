import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SkillsBox({ skills }) {
  const firstSkills = [];
  const lastSkills = [];
  for (let i = 0; i <= skills.length / 2; i += 1) {
    firstSkills.push(skills[i]);
  }

  for (let j = skills.length / 2 + 1; j < skills.length; j += 1) {
    lastSkills.push(skills[j]);
  }

  return (
    <>
    <div className="skill-column">
      {firstSkills.map((skill) => <><p className="skill-name">{skill.name}</p>
      <ProgressBar now={skill.level} /></>)}
    </div>
    <div className="skill-column">
      {lastSkills.map((skill) => <><p className="skill-name">{skill.name}</p>
      <ProgressBar now={skill.level} /></>)}
    </div>
    </>
  );
}
