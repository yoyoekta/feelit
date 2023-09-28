import React, { useEffect, useState } from "react";
import NavBar from "../layout/Navbar";
import { FaHeart, FaSearch } from "react-icons/fa";
import { useGetproductsQuery } from "../../app/api/userApi";
import { Link } from "react-router-dom";

const Explore = () => {
  const { data: products, isLoading, error } = useGetproductsQuery();

  return (
    <div className="bg-bgcolor min-h-screen">
      <NavBar />
      <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl font-serif sm:my-10 text-secondary">
        <span className="text-primary font-serif">Explore</span> Our Products
      </h1>

      <div className="max-w-7xl mx-auto flex items-center space-x-2 font-bold font-serif text-xl sm:text-2xl lg:text-3xl text-secondary border-2 border-primary rounded-xl p-2 sm:my-10 bg-inherit">
        <input
          type="text"
          placeholder="Find your fragrance type"
          className="w-full outline-none bg-inherit px-4 placeholder:font-medium"
          required
        />
        <FaSearch className="text-color font-medium m-1 left-1" />
      </div>

      <div className="flex gap-2">
        <div className="ml-2 basis-1/5 border-r border-grey-100 text-secondary pl-8">
          <h3 className="text-xl font-bold text-primary">Filters</h3>
          <h4 className="text-lg font-bold mt-4">Categories</h4>
          <ul className="mt-2">
            <li>Perfumes</li>
            <li>Deodorants</li>
            <li>Room Fresheners</li>
            <li>Attars</li>
            <li>Combos</li>
          </ul>

          <h4 className="text-lg font-bold mt-4">Brands</h4>
          <ul className="mt-2">
            <li className="cursor-pointer">AeroCare</li>
            <li>Viwa</li>
            <li>S&P</li>
            <li>OSSA</li>
            <li>OSR</li>
            <li>WindSong</li>
          </ul>
        </div>

        <div className="basis-4/5 grid grid-cols-4 text-color">
          {isLoading ? (
            <div> Products are getting loaded! </div>
          ) : (
            products.products.map((product, index) => {
              return (
                <div
                  className="flex flex-col lg:flex-row bg-bgcolor my-4 justify-center items-center text-color space-y-4 lg:space-y-0"
                  key={index}
                >
                  <Link to={"/explore/" + product._id}>
                    <div className="p-2 flex flex-col items-center bg-color rounded-xl text-grey cursor-pointer">
                      <div className="relative">
                        <img
                          src={product.image.secure_url}
                          className="h-50 sm:w-60 sm:h-75 rounded-xl sm:m-1"
                        />
                        <div className="absolute h-10 w-10 top-0 right-0 sm:m-1 flex items-center justify-center bg-secondary rounded-tr-lg rounded-bl-lg">
                          <FaHeart className="text-2xl text-primary" />
                        </div>
                        <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-serif mt-3 ml-1">
                          {product.name}
                        </h4>
                        <p className="ml-1 my-1">
                          <span className="text-primary font-bold text-lg">
                           ₹ {product.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}

          {/* {!isLoading && products.products.map((product, index) => {
            {console.log(product)}
            <div className="flex flex-col lg:flex-row bg-bgcolor my-4 justify-center items-center text-color space-y-4 lg:space-y-0" key={index}>
              <div className="p-2 flex flex-col items-center bg-color rounded-xl text-grey">
                <div className="relative">
                  <img
                    src={product.image.secure_url}
                    className="h-50 sm:w-60 sm:h-75 rounded-xl sm:m-1"
                  />
                  <div className="absolute h-10 w-10 top-0 right-0 sm:m-1 flex items-center justify-center bg-secondary rounded-tr-lg rounded-bl-lg">
                    <FaHeart className="text-2xl text-primary" />
                  </div>
                  <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-serif mt-3 ml-1">
                    {product.name}
                  </h4>
                  <p className="ml-1 my-1">
                    <span className="text-primary font-bold text-lg">
                      {product.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Explore;
