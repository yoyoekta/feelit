import React from "react";
import { FaUser } from "react-icons/fa";

const AdminNav = () => {
  return (
    <div className="">
      <nav className="p-5 mx-auto h-15 flex justify-between items-center text-color">
        <h1 className="font-bold text-xl"><span className="hidden sm:inline">ADMIN</span> DASHBOARD</h1>
        <div className="flex justify-center items-center space-x-2 text-lg">
          <FaUser /> <span>Ekta</span>
        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
