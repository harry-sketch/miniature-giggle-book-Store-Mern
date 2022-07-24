import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBook from "../../../hooks/useBook";

// Components
import BasicInput from "../../common/BasicInput/BasicInput";

const Update = () => {
  const params = useParams();
  const [book, setBook] = useState({
    title: "",
    price: "",
    desc: "",
    imgUrl: "",
  });

  const { title, price, desc, imgUrl } = book;

  const navigate = useNavigate();

  const { addToast } = useBook();

  useEffect(() => {
    getOneBook();
  }, []);

  const getOneBook = async () => {
    const res = await fetch(`http://localhost:5000/books/update/${params.id}`, {
      method: "get",
    });

    const data = await res.json();
    console.log(data);
    setBook({
      title: data.title,
      price: data.price,
      desc: data.desc,
      imgUrl: data.imgUrl,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:5000/books/update/${params.id}`,
        {
          method: "put",
          body: JSON.stringify(book),
          "Content-Type": "application/json",
        }
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        addToast("Book updated successfully!!", "success");
        navigate("/books");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-white flex items-center pt-20 px-6 pb-6 space-x-8 justify-center h-screen w-full ">
      <div className=" h-96 w-96 border  rounded-xl">
        <img
          src={book.imgUrl}
          alt={book.title}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="w-full">
        <BasicInput
          type="text"
          placeholder="Enter Title"
          className="w-full"
          value={title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          type="text"
          placeholder="Enter Price in Dollars"
          value={price}
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          type="text"
          placeholder="Enter Description"
          value={desc}
          name="desc"
          onChange={(e) => handleChange(e)}
        />
        <BasicInput
          type="text"
          placeholder="Enter Img Url"
          value={imgUrl}
          name="imgUrl"
          onChange={(e) => handleChange(e)}
        />
        <button
          type="button"
          className="w-full bg-gradient-to-r from-[#01C29A] to-[#E9CD70] p-5 outline-none border-none cursor-pointer text-white font-base font-bold"
          onClick={handleUpdate}
        >
          Update Book
        </button>
      </div>
    </div>
  );
};

export default Update;
