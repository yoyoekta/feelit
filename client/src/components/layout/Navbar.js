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
    <nav className="h-28 md:h-16 justify-between items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 auto-cols-fr md:gap-4 justify-between items-center w-full">
        <div className="grid p-2 justify-start md:justify-center">
          <NavLink to="/">
            <img className="h-20 w-20" src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="md:bg-inherit bg-primary p-2 col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 row-start-2 flex gap-2 md:gap-8 justify-center items-center text-secondary text-sm sm:text-base">
          <NavLink to="/explore">
            <div className=" cursor-pointer">Explore</div>
          </NavLink>
          <div className="relative group cursor-pointer">
            Categories
            <div className="absolute -left-4 bg-gray-200 border border-gray-300 text-black hidden group-hover:block z-10">
              <Link
                to="/explore?category=Perfume"
                className="block  px-4 py-2 hover:bg-gray-300"
              >
                Perfume
              </Link>
              <Link
                to="/explore?category=Deodorant"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                Deodorant
              </Link>
              <Link
                to="/explore?category=Room+Freshener"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                Room Freshener
              </Link>
              <Link
                to="/explore?category=Attar"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                Attar
              </Link>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            Brands
            <div className="absolute -left-4 bg-gray-200 border border-gray-300 text-black hidden group-hover:block z-10">
              <Link
                to="/explore?brand=AeroCare"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                AeroCare
              </Link>
              <Link
                to="/explore?brand=Viwa"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                Viwa
              </Link>
              <Link
                to="/explore?brand=S&P"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                S&P
              </Link>
              <Link
                to="/explore?brand=OSSA"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                OSSA
              </Link>
              <Link
                to="/explore?brand=OSR"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                OSR
              </Link>
              <Link
                to="/explore?brand=WindSong"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                WindSong
              </Link>
            </div>
          </div>
          <NavLink to="/contact">
            <div className="cursor-pointer md:block">Contact</div>
          </NavLink>
        </div>

        <div className="flex justify-end p-2 md:justify-center space-x-2 md:space-x-6 items-center mr-1">
          <NavLink to="/explore">
            <FaSearch className="text-secondary text-2xl cursor-pointer" />
          </NavLink>
          <NavLink to="/cart">
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
            <div className="relative group inline-block text-secondary cursor-pointer text-xl self-start font-medium">
              <FaUser className="m-1" />
              <div className="absolute top-7 -left-4 hidden group-hover:block z-10 text-base">
                {/* <Link
                      to=""
                      className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                    >
                      Profile
                    </Link> */}
                {isAuthenticated.role === "admin" ? (
                  <Link
                    to="/admin"
                    className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                  >
                    Admin Dashboard
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  to="/cart"
                  className="block bg-gray-200 border border-gray-300 text-black px-4 py-2 hover:bg-gray-300"
                >
                  My Cart
                </Link>
                <Link
                  to="/orders"
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
    </nav>
  );
}
