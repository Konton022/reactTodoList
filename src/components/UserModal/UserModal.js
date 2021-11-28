import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user";
import { Modal, Form, Button, Row } from "react-bootstrap";

const UserModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signType, setSignType] = useState("Sign Up");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email: ", email, "password", password);
    dispatch(addUser({ email, password }));

    setOpen(false);
  }
  return (
    <Modal
      show={open}
      onHide={() => setOpen(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Sign please...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
          <Form.Group as={Row} className="m-2">
            <Form.Check type="radio" label="Sign Up" />
            <Form.Check type="radio" label="Sign In" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
