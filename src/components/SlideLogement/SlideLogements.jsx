import "../SlideLogement/slideLogements.css";
import ArrowLeft from "../../assets/images/ArrowSlide_left.png";
import ArrowRight from "../../assets/images/ArrowSlide_right.png";
import { useState } from "react";

export default function SlideLogement({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = function () {
    setCurrentImage((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = function () {
    setCurrentImage((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showArrowAndNumbers = images.length > 1;

  return (
    <>
      <div className="slide-container">
        {showArrowAndNumbers && (
          <div className="arrows">
            <img
              className="arrow-left"
              src={ArrowLeft}
              alt="Arrow_left"
              onClick={prevSlide}
            />
            <img
              className="arrow-right"
              src={ArrowRight}
              alt="Arrow_right"
              onClick={nextSlide}
            />
          </div>
        )}
        <img
          className="slide-images"
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
        />
        {showArrowAndNumbers && (
          <p className="slide-numbers">{`${currentImage + 1}/${
            images.length
          }`}</p>
        )}
      </div>
    </>
  );
}
