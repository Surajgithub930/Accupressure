

import React, { useState, useEffect } from "react";
import img1 from '../assets/images/Slide1.jpg'
import img2 from '../assets/images/Slide2.jpg'
import img3 from '../assets/images/Slide3.webp'

const images = [
  {
    src: img1,
    // caption: "Acupressure Slide 1",
  },

  {
    src: img2,
    // caption: "Acupressure Slide 2",
  },

  {
    src: img3,
    caption: "Best Solution for Painful Life",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance the slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <>
      <div className=" relative w-full overflow-hidden  ">
        {/* Slider Wrapper */}
        <div className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {/* Slide Images */}
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.caption}

                className="w-full object-content h-56 2xl:h-[60vh]  xl:h-[60vh] lg:h-[60vh] md:h-[60vh] sm:h-[60vh] "
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl md:text-5xl text-center font-bold text-white bg-opacity-40 bg-black p-4 rounded-lg">
                  {image.caption}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 hover:bg-gray-900 text-white rounded-full"
        >
          Prev
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 hover:bg-gray-900 text-white rounded-full"
        >
          Next
        </button>

        {/* Dots for Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-white" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
