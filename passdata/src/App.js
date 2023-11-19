import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    title: "Pass data through react router",
  });
  return (
    <BrowserRouter>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" state={{ data: data }} className="link">
          About
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
