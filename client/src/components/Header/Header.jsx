import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useBook from "../../hooks/useBook";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const { setBooks, fetchBooks } = useBook();

  const isAuth = JSON.parse(localStorage.getItem("user"))?.name;

  const handleLogout = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = async (e) => {
    const search = e.target.value;
    try {
      if (search === "") {
        fetchBooks();
      }
      const res = await fetch(`http://localhost:5000/books/search/${search}`, {
        method: "get",
      });

      const data = await res.json();
      console.log(data);
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="absolute top-0 left-0 px-[2%] py-[1%] flex items-center justify-between w-full text-white">
      <div className="flex items-center w-1/2 ">
        <div className="text-white text-5xl font-bold">Books</div>
        <div className="md:flex items-center w-full md:justify-around hidden">
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
      </div>
      <div className="flex items-center w-1/2 justify-end">
        <div className="mr-4 w-full bg-white p-2 rounded-lg">
          <input
            type="text"
            className="bg-transparent border-none outline-none text-black"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-[#286EF1] px-4 py-2 rounded-xl cursor-pointer border-none outline-none font-semibold text-base relative capitalize hover:bg-blue-500"
          onClick={handleLogout}
        >
          {isAuth}
        </button>
      </div>

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
