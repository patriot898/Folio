import React from 'react';
import ProjectBlock from '../components/ProjectBlock.jsx';
import projects from './projectInfo.js';

export default function Projects() {
  return (
    <section className="white-section container" id="projects">
      <h2 className="section-title title-text">Projects</h2>
      {projects.map((project) => <ProjectBlock project={project} />)}

    </section>

  );
}
