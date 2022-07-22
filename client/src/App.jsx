import { Route, Routes, useLocation } from "react-router-dom";

// Styles
import "./App.css";

// Components
import { SignUp, Toast, Books, Header } from "./components";

function App() {
  const location = useLocation();

  const path = ["/", "/login"];

  return (
    <div>
      {!path.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
