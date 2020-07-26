import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ProjectBlock({ project }) {
  return (
    <Card>
      <div className="card-image-container">
        <Card.Img variant="left" src={project.image} className="card-image" />

      </div>
    </Card>
  );
}
