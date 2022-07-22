import React, { useState } from "react";
import { useEffect } from "react";

// Components
import BookComp from "./BookComp/BookComp";

const Books = () => {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:5000/books";

  useEffect(() => {
    fetchBooks();
    console.log(books);
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch(url, {
        method: "get",
      });

      const data = await res.json();
      // console.log(data);
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };
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
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Books;
