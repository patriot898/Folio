import React from 'react';

export default function ProjectBlock({ project }) {
  return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={project.image} className="card-image" />
      </div>
      <div className="project-info-container">
        <p className="project-title">{project.title}</p>
        <p className="project-description">{project.description}</p>
        <p className="project-tech">Tech Used:</p>
        <ul className="tags">
          {project.tech.map((skill) => <li>{skill}</li>)}

        </ul>
      </div>
    </div>
  );
}
