import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
const Footer = () => {
  return (
    <Navbar variant="light" bg="light" fixed="bottom">
      <Navbar.Brand href="#">Footer</Navbar.Brand>
      <Navbar.Text>all rights reserved @ 2021 </Navbar.Text>
    </Navbar>
  );
};

export default Footer;
