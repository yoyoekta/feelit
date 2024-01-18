import React from "react";
import { FaHeart } from "react-icons/fa";
import { useGetNewArrivalsQuery } from "../../app/api/userApi";

const NewArrivals = () => {
  const { data: products, isLoading } = useGetNewArrivalsQuery();
  // console.log(newarrivals);
  return (
    <div className="bg-bgcolor sm:pb-10">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl font-serif sm:my-10 text-secondary">
          <span className="text-primary font-serif">New</span> Arrivals
        </h1>
        <div className="flex flex-col lg:flex-row bg-bgcolor my-4 items-center text-color gap-8">
          {products?.newarrivals?.map((product, index) => {
            return (
              <div className="basis-1/3 flex flex-col items-center">
                <div className="flex-1 p-4 flex flex-col items-center bg-secondary rounded-xl text-grey">
                  <div className="relative">
                    <img
                      src={product.image.url}
                      className="md:h-50 sm:w-80 sm:h-75 rounded-xl sm:m-1"
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
              </div>
            );
          })}

          {/* <div className="basis-1/3 flex flex-col items-center">
            <div className="flex-1 p-2 flex flex-col items-center bg-color rounded-xl text-grey">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-photo/bright-hearts_1048-4220.jpg?w=740&t=st=1692071123~exp=1692071723~hmac=9590a0d05958690e4d0187357997fd4281045b87719a577542da8db5c47bc202"
                  className="h-50 sm:w-80 sm:h-75 rounded-xl sm:m-1"
                />
                <div className="absolute h-10 w-10 top-0 right-0 sm:m-1 flex items-center justify-center bg-secondary rounded-tr-lg rounded-bl-lg">
                  <FaHeart className="text-2xl text-primary" />
                </div>
                <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-serif mt-3 ml-1">
                  Signature Black
                </h4>
                <p className="ml-1 my-1">
                  <span className="text-primary font-bold text-lg">$25.00</span>
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="basis-1/3 flex flex-col items-center">
            <div className="flex-1 p-2 flex flex-col items-center bg-color rounded-xl text-grey">
              <div className="relative">
                <img src="https://img.freepik.com/free-photo/bright-hearts_1048-4220.jpg?w=740&t=st=1692071123~exp=1692071723~hmac=9590a0d05958690e4d0187357997fd4281045b87719a577542da8db5c47bc202" 
                className="h-50 sm:w-80 sm:h-75 rounded-xl sm:m-1"
                />
                <div className="absolute h-10 w-10 top-0 right-0 sm:m-1 flex items-center justify-center bg-secondary rounded-tr-lg rounded-bl-lg">
                  <FaHeart className="text-2xl text-primary" />
                </div>
                <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-serif mt-3 ml-1">
                  Signature Black
                </h4>
                <p className="ml-1 my-1">
                  <span className="text-primary font-bold text-lg">$25.00</span>
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="basis-1/3 flex flex-col items-center">
            <div className="flex-1 p-2 flex flex-col items-center bg-color rounded-xl text-grey">
              <div className="relative">
                <img src="https://img.freepik.com/free-photo/bright-hearts_1048-4220.jpg?w=740&t=st=1692071123~exp=1692071723~hmac=9590a0d05958690e4d0187357997fd4281045b87719a577542da8db5c47bc202" 
                className="h-50 sm:w-80 sm:h-75 rounded-xl sm:m-1"
                />
                <div className="absolute h-10 w-10 top-0 right-0 sm:m-1 flex items-center justify-center bg-secondary rounded-tr-lg rounded-bl-lg">
                  <FaHeart className="text-2xl text-primary" />
                </div>
                <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-serif mt-3 ml-1">
                  Signature Black
                </h4>
                <p className="ml-1 my-1">
                  <span className="text-primary font-bold text-lg">$25.00</span>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
