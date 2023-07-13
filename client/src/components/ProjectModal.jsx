import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalCarousel from './ModalCarousel.jsx';

export default function ProjectModal({ project, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton />
      <Modal.Body>
        <p className="modal-title">{project.title}</p>
        <ModalCarousel images={project.carouselImages} />
        <p className="project-description">{project.longDescription}</p>
          <div className="modal-link-wrapper">
            <a href={project.hyperlink} className="link">{project.shortlink}</a>
          </div>
        <div className="modal-tech">
            <p className="project-tech">Tech Used:</p>
            <ul className="tags">
              {project.tech.map((skill, idx) => <li key={idx}>{skill}</li>)}
            </ul>
        </div>
      </Modal.Body>
    </Modal>

  );
}
