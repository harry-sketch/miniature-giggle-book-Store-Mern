import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
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
  return (
    <BookContext.Provider value={{ toast, addToast, removeToast }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
