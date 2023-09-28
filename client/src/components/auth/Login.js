import React from "react";
import Logo from "../../images/Logo-nobg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { useLoginMutation } from "../../app/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../app/slices/authSlice";

const Login = () => {

  const [login, {isLoading, error}] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try{
      const user = await login({email, password});
      console.log(user);
      const username = user.data.foundUser.username;
      const role = user.data.foundUser.role;
      dispatch(setCredentials({user: {username, email, role}}));
      navigate('/');
    }
    catch(err){
      console.log(err);
    }

  }
  return (
    <div className="bg-bgcolor text-color h-screen grid md:grid-cols-2">
      <div className="hidden md:block">
        <div className="relative rounded-br-full rounded-bl-3xl h-full w-full bg-primary flex flex-col text-center">
          <h5 className="mt-24 mx-2 p-2 text-2xl font-bold object-contain">
            Welcome Back!
          </h5>
          <p className="text-xl m-2 p-2 object-contain">
            We are thrilled to welcome you to our website! Looking for some
            amazing fragrances, you are at right spot, we are happy to serve
            you!
          </p>
          <p className="text-xl p-1 object-contain">Not a member?</p>
          <Link to="/auth/register">
            <button className="p-2 text-bgcolor text-xl font-black self-center">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <img src={Logo} alt="Logo" className="h-40 w-40 self-center" />
        <h1 className="text-3xl text-center m-4 font-bold">Sign In</h1>
        <form className="w-full sm:mx-auto flex flex-col place-items-center space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 sm:w-1/2">
            <div className="flex items-center space-x-2 border-2 border-slate-400 rounded-full px-4 py-2 bg-inherit">
              <FaUser className="text-slate-500" />
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
            Login
          </button>
        </form>
        <div className="p-2 m-1 font-medium self-center cursor-pointer">FORGOT PASSWORD?</div>
      </div>
    </div>
  );
};

export default Login;
