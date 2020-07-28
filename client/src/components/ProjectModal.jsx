import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

export default function ProjectModal({ project, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton />
      <Modal.Body>
        <p className="modal-title">{project.title}</p>
        <img src={project.image} className="modal-image" />
        <p className="project-description">{project.description}</p>
        <ul className="tags">
          <span className="project-tech">Tech Used:</span>
          {project.tech.map((skill, idx) => <li key={idx}>{skill}</li>)}
        </ul>
      </Modal.Body>
    </Modal>

  );
}
