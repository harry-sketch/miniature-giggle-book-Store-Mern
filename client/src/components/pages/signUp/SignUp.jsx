import React from "react";
import { Link } from "react-router-dom";

// Common
import BasicInput from "../../common/BasicInput/BasicInput";

const SignUp = () => {
  return (
    <div className="bg-custom-1 w-full h-screen p-[5%] flex flex-col justify-start items-center">
      <div className="text-white text-4xl font-bold">
        Sign Up to Your Account
      </div>
      <div className="text-gray-400 my-4 text-base border-b border-custom-3">
        if u'r new here
      </div>
      <BasicInput placeholder="Username" />
      <BasicInput placeholder="Email" />
      <BasicInput placeholder="Password" />
      <button
        type="button"
        className="w-1/2 bg-gradient-to-r from-[#01C29A] to-[#E9CD70] py-5 font-extrabold text-lg cursor-pointer"
      >
        Sign Up
      </button>
      <div className="my-2 text-white">
        <span>If already have a account.</span>
        <Link to="/login" className="ml-2 text-custom-3 font-extrabold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
