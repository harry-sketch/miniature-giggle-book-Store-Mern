import React, { useState, useEffect } from "react";
import useBook from "../../../hooks/useBook";

// Components
import BookComp from "./BookComp/BookComp";

const Books = () => {
  const { addToast, books, setBooks, fetchBooks } = useBook();

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/books/delete/${id}`, {
        method: "delete",
      });
      const data = await res.json();
      console.log(data);
      fetchBooks();
      addToast("Book Deleted Successfilly !!", "warning");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
    console.log(books);
  }, []);

  return (
    <div className="bg-custom-1 pt-20 px-6 pb-6 md:place-items-center grid-cols-2 w-full min-h-screen text-white  grid md:grid-cols-4 gap-2  md:items-center md:justify-center">
      {books && books.length > 0 ? (
        books.map((book) => (
          <BookComp
            key={book._id}
            title={book.title}
            src={book.imgUrl}
            desc={book.desc}
            price={book.price}
            handleDelete={() => handleDelete(book._id)}
          />
        ))
      ) : (
        <div>Currently No Books Available !!!</div>
      )}
    </div>
  );
};

export default Books;
