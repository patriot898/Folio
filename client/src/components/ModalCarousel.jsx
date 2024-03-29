import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselImage = (image, index) => (
  <Carousel.Item key={index}>
    <picture>
      <source srcSet={image.primary_path} type="image/webp" className="modal-image" />
      <source srcSet={image.secondary_path} type="image/jpeg" className="modal-image" />
      <img src={image.secondary_path} className="modal-image" alt={image.alt} />
    </picture>
  </Carousel.Item>
);

export default function ModalCarousel({ images }) {
  return (
    <Carousel interval={7000} className="bottom-marg">
      {images.map((image, index) => CarouselImage(image, index))}
    </Carousel>
  );
}
