import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BookContextProvider from "./context/BookContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BookContextProvider>
);
