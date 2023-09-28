import React from "react";
import Logo from "../../images/Logo-nobg.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-bgcolor text-color">
      <div className="max-w-7xl py-10 container mx-auto px-6 flex justify-around space-x-10">
        <div className="flex flex-col space-y-2">
          <img src={Logo} alt="logo" className="w-40" />
        </div>

        <div className="flex flex-col mt-5">
          <h3 className="text-2xl text-primary font-bold pb-2">Address</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
                <FaShop className="text-base" />
                <p>Shop No. 117, Gaushala Market, Bhiwani, Haryana 127021</p>
            </div>

            <div className="flex items-center space-x-4 text-sm">
                <FaPhone className="text-base" />
                <p>8221807896</p>
            </div>

            <div className="flex items-center space-x-4 text-sm">
                <FaEnvelope className="text-base" />
                <p>bkt7896@gmail.com</p>
            </div>
        </div>
        </div>
        <div className="flex flex-col mt-5">
          <h3 className="text-2xl text-primary font-bold">Quick Links</h3>
          <ul className="flex flex-col py-2">
            <li>
              <Link to="/explore" className="text-white hover:text-secondary">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/explore" className="text-white hover:text-secondary">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/explore" className="text-white hover:text-secondary">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-5">
          <h3 className="text-2xl text-primary font-bold">Account</h3>
          <ul className="flex flex-col py-2">
            <li>
              <Link to="/auth/register" className="text-white hover:text-secondary">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/auth/login" className="text-white hover:text-secondary">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
        <hr className="text-grey"/>
      <div className="max-w-7xl container mx-auto px-6 py-10 flex justify-center">
            <p className="text-sm text-color">© 2021 BKT. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
