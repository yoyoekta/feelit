import React from "react";
import NavBar from "../layout/Navbar";
import Information from "./Information";
import { useLocation } from "react-router-dom";
import Gateway from "./Gateway";
import Confirmation from "./Confirmation";

const OrderDetails = () => {

  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  return (
    <div className="bg-bgcolor min-h-screen">
      <NavBar />
      <div className="max-w-2xl mx-auto flex flex-col text-color justify-center m-10">
        <div className="flex justify-around items-center space-x-4">
        <h3 className="text-xl font-semibold mx-4 px-7">Information</h3>
        <h3 className="text-xl font-semibold mx-4 px-7">Payment</h3>
        <h3 className="text-xl font-semibold mx-4 px-7">Confirmation</h3>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
          { (url === "/payment/info") ? 
            <div className="bg-primary h-2.5 rounded-full w-1/3"></div>
           : "" }
          { (url === "/payment/gateway") ?
            <div className="bg-primary h-2.5 rounded-full w-2/3"></div> 
            : "" }
          { (url === "/payment/confirmation") ?
            <div className="bg-primary h-2.5 rounded-full w-full"></div>
            : "" }
        </div>
      </div>
      { (url === "/payment/info") ? 
            <Information />
           : "" }
          { (url === "/payment/gateway") ?
            <Gateway />
            : "" }
          { (url === "/payment/confirmation") ?
            <Confirmation />
            : "" }
    </div>
  );
};

export default OrderDetails;
