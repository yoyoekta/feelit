import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductView = ({ product }) => {
  return (
    // <div className="flex flex-col lg:flex-row bg-bgcolor my-4 justify-center items-center text-color space-y-4 lg:space-y-0">
    <Link to={"/explore/" + product._id}>
      <div className="py-4 flex flex-col items-center bg-color rounded-xl text-grey cursor-pointer">
        <div className="flex flex-col justify-center">
          <div className="relative self-center">
            <img
              src={product.image.secure_url}
              className="relative self-center h-50 sm:w-60 sm:h-75 rounded-xl sm:mx-1 sm:my-1"
            />
            <div className="absolute h-10 w-10 top-0 right-0 sm:m-1 flex items-center justify-center bg-secondary rounded-tr-lg rounded-bl-lg">
              <FaHeart className="text-2xl text-primary" />
            </div>
          </div>
          <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-serif mt-3 ml-1">
            {product.name}
          </h4>
          <p className="font-normal text-sm sm:text-md lg:text-lg font-serif ml-1">
            {product.brand}
          </p>
          <p className="flex justify-between ml-1">
            <span className="text-primary font-bold text-lg">
              ₹ {product.price}
            </span>
            <span className="text-primary font-bold text-lg">
              {product.size} ml
            </span>
          </p>
        </div>
      </div>
    </Link>
    // </div>
  );
};

export default ProductView;
