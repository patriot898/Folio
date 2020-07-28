import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselItem = (image, index) => (
    <Carousel.Item key={index}>
      <img src={image} className="modal-image" />
    </Carousel.Item>
);

export default function ModalCarousel({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => CarouselItem(image, index))}
    </Carousel>
  );
}
