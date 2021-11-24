import React from "react";

import { useState } from "react";
import { Nav, Navbar, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserModal from "../UserModal/UserModal";
import logo from "./logo2.png";

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
        <a href="https://canary-elm-f91.notion.site/CV-Page-73fddf23f7ba448799ed6e640c1b7843">
          <img
            src={logo}
            alt="logo"
            width="45"
            height="45"
            className="d-inline-block align-top"
          />
        </a>
        Konstantin's page
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="root-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="me-auto ">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/projects">Todo list</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">Contact</Link>
          </Nav.Item>
        </Nav> */}
      </Navbar.Collapse>

      <Button className="m-2" size="sm" onClick={() => setOpen(true)}>
        Sing In
      </Button>
      <UserModal open={open} setOpen={setOpen} />
    </Navbar>
  );
}
