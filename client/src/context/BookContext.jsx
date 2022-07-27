import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [toast, setToast] = useState([]);

  const addToast = (text, type) => {
    setToast((prev) => [
      ...prev,
      { text, type, id: Math.floor(Math.random() * 10) },
    ]);

    setTimeout(() => {
      removeToast();
    }, 2000);
  };

  const removeToast = (id) => {
    const filteredToast = toast.filter((item) => item.id !== id);
    setToast(filteredToast);
  };

  const url = "http://localhost:5000/books";

  const fetchBooks = async () => {
    try {
      const res = await fetch(url, {
        method: "get",
      });

      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BookContext.Provider
      value={{ toast, addToast, removeToast, books, setBooks, fetchBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
