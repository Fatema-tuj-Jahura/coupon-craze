import React, { useState } from "react";
import { Link } from 'react-router-dom';
import image from "../../assets/image.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StaticSlider = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div
      className="relative w-full  flex flex-col md:flex-row items-center  font-poppins bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center px-6 md:px-10 gap-6">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-white  mb-4">
          Save Big with Every Click!
          </h1>
          <p className="text-gray-300 text-sm md:text-lg mb-6">
          Discover and collect the best deals, discounts, and coupons all in one place. Simplify your savings and never miss a bargain again! All the large brands comes under one roof..
          </p>
          <Link to='/login' className="border-2 border-white bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-8 rounded">
            Seems interesting? Join Us in the coupon craze!
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="relative w-full max-w-sm lg:max-w-md h-3/5 lg:h-4/5">
            {/* Current Slide */}
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="object-cover  w-full h-3/4 lg:h-full"
            />

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <FaArrowLeft size={16} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticSlider;
