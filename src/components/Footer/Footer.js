import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <Container variant="dark" bg="dark" className="mb-0">
      <Row>
        <Col></Col>
        <Col md={10}>2021</Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Footer;
