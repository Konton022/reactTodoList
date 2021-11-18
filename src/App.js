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
      <BrowserRouter>
        <Navibar />

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
