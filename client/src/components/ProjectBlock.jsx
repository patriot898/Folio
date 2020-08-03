import React, { useState } from 'react';
import ProjectModal from './ProjectModal.jsx';

export default function ProjectBlock({ project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="project-card" onClick={handleShow}>

        <div className="card-image-container">
          <img src={project.image} className="card-image" />
        </div>
        <div className="project-info-container">
          <p className="project-title">{project.title}</p>
          <p className="project-description">{project.shortDescription}</p>
          <p className="project-tech">Tech Used:</p>
          <ul className="tags">
            {project.tech.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
          <span className="card-link-wrapper">
            <a href={project.hyperlink} className="link">{project.shortlink}</a>
          </span>
        </div>
      </div>
      <ProjectModal project={project} show={show} handleClose={handleClose} />
    </>
  );
}
