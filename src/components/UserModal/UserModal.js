import React, { useState } from "react";

import { Modal, Form, Button } from "react-bootstrap";

const UserModal = ({ open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email: ", email, "password", password);
  return (
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
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></Form.Control>
          <Form.Control
            type="password"
            className="m-2"
            placeholder="enter your password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></Form.Control>
          <Button>Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
