import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBook from "../../../hooks/useBook";

// Common
import BasicInput from "../../common/BasicInput/BasicInput";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const { addToast } = useBook();

  const url = "http://localhost:5000/books/signUp";

  // Funs

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(url, {
        method: "Post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data.result);
      localStorage.setItem("user", JSON.stringify(data.result));
      navigate("/books");
      setFormData({ name: "", email: "", password: "" });
      addToast("Signed up successfully!!", "success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-custom-1 w-full h-screen p-[5%] flex flex-col justify-start items-center">
      <div className="text-white text-4xl font-bold">
        Sign Up to Your Account
      </div>
      <div className="text-gray-400 my-4 text-base border-b border-custom-3">
        if u'r new here
      </div>
      <BasicInput
        placeholder="Username"
        onChange={(e) => handleChange(e)}
        value={name}
        name="name"
        type="text"
        className="w-1/2"
      />
      <BasicInput
        placeholder="Email"
        onChange={(e) => handleChange(e)}
        value={email}
        name="email"
        type="text"
        className="w-1/2"
      />
      <BasicInput
        placeholder="Password"
        onChange={(e) => handleChange(e)}
        value={password}
        name="password"
        type="password"
        className="w-1/2"
      />
      <button
        type="button"
        className="w-1/2 bg-gradient-to-r from-[#01C29A] to-[#E9CD70] py-5 font-extrabold text-lg cursor-pointer"
        onClick={handleSignUp}
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
