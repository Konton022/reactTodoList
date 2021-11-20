//import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navibar from "./components/Navibar/Navibar";

import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";
import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <Navibar />
      <Container fluid>
        <Row className="mb-5">
          <Col></Col>
          <Col lg={10}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}
