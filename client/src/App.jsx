import { Route, Routes, useLocation } from "react-router-dom";

// Styles
import "./App.css";

// Components
import {
  SignUp,
  Toast,
  Books,
  Header,
  AddBook,
  About,
  Contact,
  Login,
  PrivateComponent,
} from "./components";

function App() {
  const location = useLocation();

  const path = ["/", "/login"];

  return (
    <div className="bg-custom-1 min-h-screen">
      {!path.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route path="/books" element={<Books />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
