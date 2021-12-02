import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// import { auth, database } from "./service/firebase";

import Navibar from "./components/Navibar/Navibar";

//import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";
import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Navibar />
      <Container fluid>
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Container>
    </div>
  );
}
