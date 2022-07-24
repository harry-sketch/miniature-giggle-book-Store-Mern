import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const isAuth = JSON.parse(localStorage.getItem("user"))?.name;

  const handleLogout = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="absolute top-0 left-0 px-[2%] py-[1%] flex items-center justify-between w-full text-white">
      <div className="text-white text-2xl font-bold">Books</div>
      <div className="md:flex items-center w-1/3 md:justify-around hidden">
        <div
          className="text-xl font-semibold hover:underline cursor-pointer"
          onClick={() => navigate("/books")}
        >
          Books
        </div>
        <div
          className="text-xl font-semibold hover:underline cursor-pointer"
          onClick={() => navigate("/addBook")}
        >
          Add Books
        </div>
        <div
          className="text-xl font-semibold hover:underline cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About
        </div>
        <div
          className="text-xl font-semibold hover:underline cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </div>
      </div>
      <button
        className="bg-[#286EF1] px-4 py-2 rounded-xl cursor-pointer border-none outline-none font-semibold text-base relative capitalize hover:bg-blue-500"
        onClick={handleLogout}
      >
        {isAuth}
      </button>

      {isOpen && (
        <div
          className="absolute bg-custom-3 px-6 py-3 rounded-xl font-semibold text-base right-5 text-center top-16 z-50 min-w-[15rem]  border border-white transition-all duration-300 cursor-pointer"
          onClick={() => {
            localStorage.clear("");
            navigate("/");
          }}
        >
          Logout
        </div>
      )}
    </nav>
  );
};

export default Header;
