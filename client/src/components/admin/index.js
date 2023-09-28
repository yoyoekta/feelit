import React from "react";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
import Main from "./Main";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const { user } = useSelector((state) => state.auth);
  if(!user){
    return <Navigate to="/auth/login" /> 
  }

  if(user && user.role !== "admin"){
    return <div className="h-screen bg-bgcolor text-color m-auto text-4xl font-bold">Access Denied!</div>
  }
  return (
    <div className="overflow-hidden h-screen bg-bgcolor">
      <AdminNav />
      <div className="flex divide-x divide-grey ">
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Admin;
