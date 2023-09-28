import React from "react";
import Logo from "../../images/Logo-nobg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useRegisterMutation } from "../../app/api/authApi";

const Register = () => {

  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (password.length < 8) {
      return alert("Password less than 8 characters");
    }
    if (password.length > 15) {
      return alert("Password more than 15 characters");
    }

    const url = process.env.REACT_APP_HOST + "auth/register";

    try{
      const res = await register({username, email, password});
      navigate("/auth/login");

    }
    catch(err){
      console.log(err);
    }
  };


  return (
    <div className="bg-bgcolor text-color h-screen grid md:grid-cols-2">
      <div className="hidden md:block">
        <div className="relative rounded-br-full rounded-bl-3xl h-full w-full bg-primary flex flex-col text-center">
          <h5 className="mt-24 mx-2 p-2 text-2xl font-bold object-contain">
            Need some Fragrances, Register Now!
          </h5>
          <p className="text-xl m-2 p-2 object-contain">
            We are thrilled to welcome you to our website! Looking for some
            amazing fragrances, you are at right spot, we are happy to serve
            you!
          </p>
          <p className="text-xl p-1 object-contain">Already a member?</p>
          <Link to="/auth/login">
            <button className="p-2 text-bgcolor text-xl font-black self-center">
                SIGN IN
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <img src={Logo} alt="Logo" className="h-40 w-40 self-center" />
        <h1 className="text-3xl text-center m-4 font-bold">Sign Up</h1>
        <form className="w-full sm:mx-auto flex flex-col place-items-center space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 sm:w-1/2">
            <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-full px-4 py-2 bg-inherit">
              <FaUser className="text-slate-500" />
              <input
                type="text"
                placeholder="Username"
                className="w-full outline-none bg-inherit px-1"
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:w-1/2">
            <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-full px-4 py-2 bg-inherit">
              <FaEnvelope className="text-slate-500" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full outline-none bg-inherit px-1"
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 sm:w-1/2">
            <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-full px-4 py-2 bg-inherit">
              <FaLock className="text-slate-500" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none bg-inherit px-1"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-secondary hover:text-grey text-white font-bold py-2 px-8 rounded-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
