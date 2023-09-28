import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import CartInfo from "./CartInfo";
import { Link } from "react-router-dom";

const Gateway = () => {
  return (
    <div className="max-w-7xl mx-auto text-color">
      <div className="flex gap-8 pb-10">
        <div className="w-1/2 border-r border-grey-300">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-semibold text-primary">
              Payment Method
            </h1>
            <div className="w-4/5 flex flex-col justify-center mt-4 gap-4">
              <div className="w-full flex flex-col justify-between">
                <label className="text-normal font-medium">
                  Select Payment Method
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                />
              </div>

              <div className="w-full flex flex-col justify-between">
                <label className="text-normal font-medium">Card Name</label>
                <input
                  type="tel"
                  placeholder="John Bell"
                  className="border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                />
              </div>

              <div className="w-full flex flex-col justify-between">
                <label className="text-normal font-medium">Card Number</label>
                <input
                  type="tel"
                  minLength="19"
                  maxLength="19"
                  placeholder="1111 2222 3333 4444"
                  className="border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                />
              </div>

              <div className="w-full flex justify-between gap-4">
                <div className="w-1/2">
                  <label className="text-normal font-medium">CVV</label>
                  <input
                    type="text"
                    minLength="3"
                    maxLength="3"
                    placeholder="123"
                    className="w-full border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                  />
                </div>

                <div className="w-1/2">
                  <label className="text-normal font-medium">Expiry Date</label>
                  <input
                    type="pin-code"
                    placeholder="16/01/2001"
                    className="w-full border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/5 flex justify-between my-10">
            <Link
              to="/payment/info"
              className="w-1/2 self-center"
            >
              <button className="w-full bg-inherit text-primary font-semibold flex justify-start items-center gap-1">
                <FaAngleLeft /> Return to Information
              </button>
            </Link>
            <Link to="/payment/confirmation" className="w-1/2">
              <button className="w-full bg-primary p-3 rounded-lg text-lg font-medium flex justify-center items-center gap-1">
                Next Step <FaAnglesRight className="text-lg" />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2">
          <CartInfo />
        </div>
      </div>
    </div>
  );
};

export default Gateway;
