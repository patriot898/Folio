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
          <picture>
            <source srcSet={project.image.primary_path} type="image/webp" className="card-image" />
            <source srcSet={project.image.secondary_path} type="image/jpeg" className="card-image" />
            <img src={project.image.secondary_path} className="card-image" alt={project.image.alt} width="600" height="600"/>
          </picture>
        </div>
        <div className="project-info-container">
          <p className="project-title">{project.title}</p>
          <p className="project-description">{project.shortDescription}</p>
          <p className="project-tech">Tech Used:</p>
          <ul className="tags">
            {project.tech.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
          <span className="card-link-wrapper">
            <a onClick={handleClose} href={project.hyperlink} className="link">{project.shortlink}</a>
          </span>
        </div>
      </div>
      <ProjectModal project={project} show={show} handleClose={handleClose} />
    </>
  );
}
