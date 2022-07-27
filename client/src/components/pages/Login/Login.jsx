import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom Hooks
import useBook from "../../../hooks/useBook";

// Components
import BasicInput from "../../common/BasicInput/BasicInput";

const Login = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const { addToast } = useBook();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData((prev) => ({ ...prev, [name]: value }));
  };

  const url = "http://localhost:5000/books/login";

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      addToast("logged in successfully !!", "success");
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-custom-1 w-full h-screen p-[5%] flex flex-col justify-center items-center">
      <div className="text-white text-4xl font-bold mb-4">
        Log in to Your Account
      </div>
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
        onClick={handleLogin}
      >
        Login
      </button>
      <div className="mt-3 text-white">
        new user ?
        <span className="ml-2 text-lg underline text-blue-400 cursor-pointer font-bold" onClick={() => navigate("/")}>
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
