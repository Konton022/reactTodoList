import React from "react";
import { useState } from "react";
import { Nav, Navbar, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Button className="m-2" size="sm" onClick={() => setOpen(true)}>
        Sing In
      </Button>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sing In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="email"
              placeholder="enter the Email"
              className="m-2"
            ></Form.Control>
            <Form.Control
              type="password"
              className="m-2"
              placeholder="enter your password"
            ></Form.Control>
            <Button>Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}
