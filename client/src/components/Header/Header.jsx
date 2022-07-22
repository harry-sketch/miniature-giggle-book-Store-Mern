import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("");
    navigate("/");
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
        className="bg-[#286EF1] px-4 py-2 rounded-xl cursor-pointer border-none outline-none font-semibold text-base"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Header;
