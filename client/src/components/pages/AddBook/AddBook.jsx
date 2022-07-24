import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom Hooks
import useBook from "../../../hooks/useBook";

// Common Comp
import BasicInput from "../../common/BasicInput/BasicInput";

const AddBook = () => {
  const [addBooks, setAddBooks] = useState({
    title: "",
    price: "",
    desc: "",
    imgUrl: "",
  });

  const { title, price, desc, imgUrl } = addBooks;

  const navigate = useNavigate();

  const { addToast } = useBook();

  //   Url
  const url = "http://localhost:5000/books/addBooks";

  //   Funs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddBooks((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBooks = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(addBooks),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      addToast("Book added successfully!!", "success");
      navigate("/books");
      console.log(data.book);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" pt-20 px-6 pb-6  w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl text-center font-bold text-custom-3 underline mb-3">
        Please Add Your Books Collection
      </h1>
      <BasicInput
        placeholder="Enter Title"
        name="title"
        value={title}
        onChange={(e) => handleChange(e)}
        className="w-1/2"
      />
      <BasicInput
        placeholder="Enter Price in Dollars"
        name="price"
        value={price}
        onChange={(e) => handleChange(e)}
        className="w-1/2"
      />
      <BasicInput
        placeholder="Enter Description"
        name="desc"
        value={desc}
        onChange={(e) => handleChange(e)}
        className="w-1/2"
      />
      <BasicInput
        placeholder="Enter Img Url"
        name="imgUrl"
        value={imgUrl}
        onChange={(e) => handleChange(e)}
        className="w-1/2"
      />
      <button
        type="button"
        className="w-1/2 bg-gradient-to-r from-[#01C29A] to-[#E9CD70] p-5 outline-none border-none cursor-pointer text-white font-base font-bold"
        onClick={handleAddBooks}
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
