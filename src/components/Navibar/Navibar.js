import React from "react";
import { Nav, Navbar, Button, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navibar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      fixed="top"
      bg="light"
      variant="light"
    >
      <Container fluid>
        <Navbar.Brand>
          {/* <img
            src="./logo3.svg"
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          SAV GROUP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="root-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/projects">reactToDoList</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact me</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Button className="m-2" size="sm">
          Sing In
        </Button>
      </Container>
    </Navbar>
  );
}
