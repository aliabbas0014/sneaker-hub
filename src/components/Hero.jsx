import React, { useState, useEffect } from "react";

const Hero = () => {
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Array of image URLs
  const images = [
    "public//images/hero.jpg",
    "public//images/hero5.jpg",
    "public//images/hero1.jpg",
    "public//images/hero6.jpg",
  ];

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Image Slider with Smooth Transition */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-all duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sneaker ${index}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
        <div>
          <h1 className="text-white text-xl font-bold mb-3 lg:text-5xl lg:mb-10">
            Step Into Style with the Best Sneakers
          </h1>
          <p className="text-white text-sm mb-3 lg:text-3xl">
            Discover the latest trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
