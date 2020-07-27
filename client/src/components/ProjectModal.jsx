import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

export default function ProjectModal({ project, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header>{project.title}</Modal.Header>
      <Modal.Body>
        <p>{project.description}</p>
      </Modal.Body>

    </Modal>

  );
}
