import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import OrderInfo from "./OrderInfo";

const Confirmation = () => {
  return (
    <div className="max-w-7xl mx-auto text-color">
      <div className="flex gap-8 pb-10">
        <div className="w-1/2 border-r border-grey-300">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-semibold text-primary">
              Order Details
            </h1>
            <div className="w-4/5 flex flex-col justify-center mt-4 gap-4">
              <div className="w-full flex flex-col justify-between space-y-2">
                <label className="text-normal font-medium">Contact</label>
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-md text-black">
                  <input
                    type="text"
                    value="+918307242815"
                    className="w-full outline-none bg-inherit"
                  />
                  <Link to="/payment/info">
                    <span className="underline text-primary text-md cursor-pointer">
                      Change
                    </span>
                  </Link>
                </div>
              </div>

              <div className="w-full flex flex-col justify-between space-y-2">
                <label className="text-normal font-medium">
                  Shipping Address
                </label>
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-md text-black">
                  <input
                    type="text"
                    value="B-1/2, 2nd Floor, Sector-18, Rohini, Delhi-110089"
                    className="w-full outline-none bg-inherit"
                  />
                  <Link to="/payment/info">
                    <span className="underline text-primary text-md cursor-pointer">
                      Change
                    </span>
                  </Link>
                </div>
              </div>

              <div className="w-full flex flex-col justify-between space-y-2">
                <label className="text-normal font-medium">
                  Payment Method
                </label>
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-md text-black">
                  <input
                    type="text"
                    value="Card"
                    className="w-full outline-none bg-inherit"
                  />
                  <Link to="/payment/gateway">
                    <span className="underline text-primary text-md cursor-pointer">
                      Change
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/5 flex justify-between my-10">
            <Link to="/payment/gateway" className="w-1/2 self-center">
              <button className="w-full bg-inherit text-primary font-semibold flex justify-start items-center gap-1">
                <FaAngleLeft /> Return to Payment
              </button>
            </Link>
            <Link to="" className="w-1/2">
              <button className="w-full bg-primary p-3 rounded-lg text-lg font-medium flex justify-center items-center gap-1">
                Pay Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
