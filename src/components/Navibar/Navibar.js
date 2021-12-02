import React from "react";

import { useState } from "react";
import { Nav, Navbar, Button, Container, Modal, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserData } from "../../store/user";
import UserModal from "../UserModal/UserModal";
import logo from "./logo2.png";

export default function Navibar() {
  const user = useSelector(selectUserData);
  const [open, setOpen] = useState(false);
  console.log("user nav", user);
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
        <a href="https://savelev-konst.notion.site/Konstantin-Savelev-s-CV-Page-73fddf23f7ba448799ed6e640c1b7843">
          <img
            src={logo}
            alt="logo"
            width="45"
            height="45"
            className="d-inline-block align-top"
          />
        </a>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="root-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
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
      {/* </Navbar.Collapse> */}

      <span>Hello! {user.email}</span>
      <Button className="m-2" size="sm" onClick={() => setOpen(true)}>
        Sign In
      </Button>
      <UserModal open={open} setOpen={setOpen} />
    </Navbar>
  );
}
