import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user";
import { Modal, Form, Button } from "react-bootstrap";

const UserModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email: ", email, "password", password);

  function handleSubmit(event) {
    event.preventDefault();
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
          Sing In
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
          <Button>Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
