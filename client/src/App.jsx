import { Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Components
import { SignUp, Toast, Books } from "./components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
