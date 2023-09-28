import React, { useState } from "react";
import Logo from "../../images/Logo-nobg.png";
import { FaSearch } from "react-icons/fa";
import { FaUser, FaXmark } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useLogoutMutation } from "../../app/api/authApi";
import { logout } from "../../app/slices/authSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.user);
  const [signout, { isLoading, error }] = useLogoutMutation();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signout();
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="min-w-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center h-20">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img className="h-20 w-20" src={Logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="flex space-x-4">
                <NavLink to="/explore">
                  <div className="text-secondary cursor-pointer md:block hidden">
                    Explore
                  </div>
                </NavLink>
                <div className="relative group text-secondary cursor-pointer md:inline-block hidden">
                  Categories
                  <div className="absolute -left-4 hidden group-hover:block z-10">
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Perfume
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Deodorant
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Room Freshener
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Attar
                    </Link>
                  </div>
                </div>
                <div className="relative group text-secondary cursor-pointer md:inline-block hidden">
                  Brands
                  <div className="absolute -left-4 hidden group-hover:block z-10">
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      AeroCare
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Viwa
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      S&P
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      OSSA
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      OSR
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      WindSong
                    </Link>
                  </div>
                </div>
                <NavLink to="/contact">
                  <div className="text-secondary cursor-pointer md:block hidden">
                    Contact
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="flex justify-center space-x-2 md:space-x-6 items-center mr-1">
              <FaSearch
                className="text-secondary text-2xl cursor-pointer"
                onClick={() => setOpen(!open)}
              />
              { open ? (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Overlay */}
                <div className="absolute -inset-8 bg-grey opacity-75"></div>
      
                {/* Dialog */}
                <div
                  className="max-w-xl mx-auto relative bottom-1/4 p-6 bg-bgcolor text-color shadow-lg rounded w-full"
                >
                  <div className="m-2">
                    <button onClick={() => setOpen(false)}>
                    <FaXmark className="absolute top-2 right-2 text-base inline-block"/>
                    </button>
                    <input
                      type="text"
                      id="inputField"
                      placeholder="Search..."
                      className="mt-1 px-3 py-2 w-full border border-grey rounded-md bg-inherit"
                    />
                  </div>
                </div>
              </div>
              ) : ""}
              <NavLink to="/payment/info">
              <IoMdCart className="text-secondary text-2xl cursor-pointer" />
              </NavLink>
              {!isAuthenticated ? (
                <Link to="/auth/login">
                  <button
                    type="button"
                    className="bg-primary text-color hover:bg-secondary hover:text-grey px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Login
                  </button>
                </Link>
              ) : (
                <div
                  className="relative group inline-block text-secondary cursor-pointer text-xl self-start font-medium"
                >
                  <FaUser className="m-1"/>
                  <div className="absolute top-7 -left-4 hidden group-hover:block z-10 text-base">
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Profile
                    </Link>
                    {isAuthenticated.role === "admin" ? (
                    <Link
                      to="/admin"
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Admin Dashboard
                    </Link>
                    ) : ""}
                    <Link
                      to="/cart"
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      My Cart
                    </Link>
                    <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      My&nbsp;Orders
                    </Link>
                    <div
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
