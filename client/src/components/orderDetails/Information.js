import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import CartInfo from "./CartInfo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../../app/slices/detailsSlice";

const Information = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToGateway = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const address = e.target[2].value;
    const pincode = e.target[3].value;
    
    dispatch(setDetails({ details: { name, phone, address, pincode } }));
    navigate("/payment/gateway");
  };

  return (
    <div className="max-w-7xl mx-auto text-color">
      <div className="flex gap-8 pb-10">
        <div className="w-1/2 border-r border-grey-300">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-semibold text-primary">Details</h1>
            <form className="w-full" onSubmit={goToGateway}>
              <div className="w-4/5 flex flex-col justify-center mt-4 gap-4">
                <div className="w-full flex flex-col justify-between">
                  <label className="text-normal font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                    required
                  />
                </div>

                <div className="w-full flex flex-col justify-between">
                  <label className="text-normal font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    minLength={10}
                    maxLength={10}
                    placeholder="Enter your phone number"
                    className="border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                    required
                  />
                </div>

                <div className="w-full flex flex-col justify-between">
                  <label className="text-normal font-medium">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your complete address"
                    className="border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                    required
                  />
                </div>

                <div className="w-full flex flex-col justify-between">
                  <label className="text-normal font-medium">Pin Code</label>
                  <input
                    type="pin-code"
                    minLength={6}
                    maxLength={6}
                    placeholder="Enter your pin code"
                    className="border-2 border-grey rounded-md h-10 p-2 mt-1 text-black"
                    required
                  />
                </div>
              </div>
              <div className="w-4/5 flex justify-between my-10">
                <Link to="/cart" className="w-1/2 self-center">
                  <button className="w-full bg-inherit text-primary font-semibold flex justify-start items-center gap-1">
                    <FaAngleLeft /> Return to Cart
                  </button>
                </Link>
                <div className="w-1/2">
                  <button
                    type="submit"
                    className="w-full bg-primary p-3 rounded-lg text-lg font-medium flex justify-center items-center gap-1"
                  >
                    Next Step <FaAnglesRight className="text-lg" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/2">
          <CartInfo />
        </div>
      </div>
    </div>
  );
};

export default Information;
