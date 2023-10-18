import React from "react";
import {
  FaHome,
  FaRegClipboard,
  FaShoppingCart,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-64 h-screen p-5 flex flex-col justify-start space-y-8 shadow-lg shadow-grey text-secondary">
      <div className="flex flex-col space-y-2">
        <span className="text-xs text-slate-400">MAIN</span>
        <Link to="/admin">
          <span className="flex items-center space-x-2 p-2 hover:bg-grey hover:rounded-md cursor-pointer">
            <FaHome />
            <span className="">Homepage</span>
          </span>
        </Link>
        {/* <Link to="/profile">
          <span className="flex items-center space-x-2 p-2 hover:bg-grey hover:rounded-md cursor-pointer">
            <FaUserFriends />
            <span className="">Profile</span>
          </span>
        </Link> */}
      </div>

      <div className="flex flex-col space-y-2">
        <span className="text-xs text-slate-400">LIST</span>
        <Link to="/admin/users">
          <span className="flex items-center space-x-2 p-2 hover:bg-grey hover:rounded-md cursor-pointer">
            <FaUserFriends />
            <span className="">Users</span>
          </span>
        </Link>
        <Link to="/admin/products">
          <span className="flex items-center space-x-2 p-2 hover:bg-grey hover:rounded-md cursor-pointer">
            <FaShoppingCart />
            <span className="">Products</span>
          </span>
        </Link>
        <Link to="/admin/orders">
          <span className="flex items-center space-x-2 p-2 hover:bg-grey hover:rounded-md cursor-pointer">
            <FaRegClipboard />
            <span className="">Orders</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
