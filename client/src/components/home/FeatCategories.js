import React from "react";

const FeatCategories = () => {
  return (
    <div className="bg-secondary sm:pb-10">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl font-serif sm:my-10">
          <span className="text-primary font-serif">Explore</span> Our
          Categories
        </h1>
        <div className="flex flex-col-reverse sm:flex-row bg-bgcolor my-4 border rounded-md text-color cursor-pointer">
          <div className="flex-1 flex flex-col p-1 m-1 mb-2 text-center sm:justify-center sm:text-left sm:p-5 sm:m-5 space-y-2">
            <h3 className=" text-primary text-xl sm:text-2xl lg:text-4xl font-serif font-semibold">Perfumes</h3>
            <p className="lg:text-xl">Find the best fragrance that suits your style and taste.</p>
            <p className="text-secondary font-medium lg:text-xl">Price ranging from Rs.50 to Rs.800</p>
          </div>
          <div className="flex-1 p-2">
            <img src="https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163109.jpg?size=626&ext=jpg" alt="Perfume-img" className="border-0 rounded-md"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatCategories;
