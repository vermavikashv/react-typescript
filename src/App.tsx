import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Reduxhome from "./reduxtoolkit/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<Reduxhome />} />
      </Routes>
    </Router>
  );
}

export default App;

/* <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <h1 className="text-4xl text-white font-bold">Hello, Tailwind CSS!</h1>
    </div> */
