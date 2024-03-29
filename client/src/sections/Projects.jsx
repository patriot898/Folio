import React from 'react';
import ProjectBlock from '../components/ProjectBlock.jsx';
// eslint-disable-next-line import/extensions
import projects from '../site_info/projectInfo.js';

export default function Projects() {
  return (
    <section className="white-section container" id="projects">
      <h2 className="section-title title-text">Projects</h2>
      {projects.map((project, idx) => <ProjectBlock project={project} key={idx} />)}

    </section>

  );
}
