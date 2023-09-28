import React from "react";
import Navbar from "../layout/Navbar";
import Head from "./Head";
import FeatCategories from "./FeatCategories";
import WhyUs from "./WhyUs";
import NewArrivals from "./NewArrivals";
import Footer from "../layout/Footer";

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-screen min-h-screen sm:h-screen bg-bgcolor flex flex-col space-y-4">
        <Navbar />
        <Head />
      </div>
      <FeatCategories />
      <NewArrivals />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Landing;
