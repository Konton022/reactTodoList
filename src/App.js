//import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navibar from "./components/Navibar/Navibar";

import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Navibar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
