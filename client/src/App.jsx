import { Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Components
import { SignUp } from "./components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
