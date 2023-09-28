import React from "react";
import NavBar from "../layout/Navbar";
import { FaShop } from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Logo from "../../images/Logo-nobg.png";

const Contact = () => {
  return (
    <div className="bg-bgcolor min-h-screen text-secondary">
      <NavBar />
      <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl font-serif sm:my-10 ">
        <span className="text-primary font-serif"> We are </span> Available
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col space-y-2">
          <img src={Logo} alt="logo" className="w-40" />
        </div>
        <div className="flex flex-col mt-5 justify-center items-center">
          <h3 className="text-2xl text-center text-primary font-bold pb-2">Address</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4 p-2">
              <FaShop className="text-xl sm:text-base" />
              <p>Shop No. XYZ, ABC</p>
            </div>

            <div className="flex items-center space-x-4 text-sm p-2">
              <FaPhone className="text-base" />
              <p>XXXXXXXXXX</p>
            </div>

            <div className="flex items-center space-x-4 text-sm p-2">
              <FaEnvelope className="text-base" />
              <p>xyz@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
