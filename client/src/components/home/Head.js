import React from "react";
import image from "../../images/image-nobg.png";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="max-w-7xl mx-auto sm:h-screen">
      <div className="flex flex-col-reverse p-6 justify-center pb-3 sm:flex-row sm:h-full">
        <div className="sm:static sm:px-1 sm:transform-none flex-1 sm:p-5 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-primary text-center sm:text-left w-full font-serif">
            Discover the fragrance of Elegance
          </h1>
          <p className=" text-color text-sm sm:text-base lg:text-xl text-center sm:text-left font-serif">
            Discover the beauty of fragrance with our collection of premium
            perfumes, deodorants, room fresheners and attars. Immense yourself
            in the aroma of luxury and elevate your style.
          </p>
          <div className="flex sm:text-left sm:w-full">
            <Link to="/explore">
              <button className=" bg-primary text-color hover:bg-secondary hover:text-grey px-6 py-4 rounded-full text-sm font-medium">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center sm:static">
          <img src={image} alt="landing" className="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
