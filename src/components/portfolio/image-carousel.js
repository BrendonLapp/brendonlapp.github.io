import { useState, useEffect } from 'react';
import ImageSlide from './image-slide';

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState();
  useEffect(() => {
    setCurrentImage(images[current]);
  }, [images, current]);

  const nextSlide = () => {
    if (images.length !== current + 1) {
      setCurrent(current + 1);
    }
    setCurrentImage(images[current]);
  };

  const previousSlide = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
    setCurrentImage(images[current]);
  };

  return (
    <>
      {images && (
        <>
          <ImageSlide
            url={currentImage}
            nextSlide={nextSlide}
            previousSlide={previousSlide}
          />
        </>
      )}
    </>
  );
};

export default ImageCarousel;
