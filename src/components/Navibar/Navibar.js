import React from "react";
import { useState } from "react";
import { Nav, Navbar, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserModal from "../UserModal/UserModal";
import logo from "./logo.svg";

export default function Navibar() {
  const [open, setOpen] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      fixed="top"
      bg="light"
      variant="light"
    >
      <Navbar.Brand>
        <img
          src={logo}
          alt="logo"
          width="45"
          height="45"
          className="d-inline-block align-top"
        />
        CV Page
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="root-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/projects">Todo list</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Button className="m-2" size="sm" onClick={() => setOpen(true)}>
        Sing In
      </Button>
      <UserModal open={open} setOpen={setOpen} />
    </Navbar>
  );
}
