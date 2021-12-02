import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, signUserFireAsync } from "../../store/user";
import { Modal, Form, Button } from "react-bootstrap";

const UserModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signType, setSignType] = useState("signUp");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email: ", email, "password", password, "signType", signType);
    //dispatch(addUser({ email, password, signType }));
    dispatch(signUserFireAsync({ email, password }));

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
          <Form.Group className="m-3">
            <Form.Check
              type="radio"
              label="Sign Up"
              name="signType"
              defaultChecked
              onChange={() => {
                setSignType("signUp");
              }}
            />
            <Form.Check
              type="radio"
              label="Sign In"
              name="signType"
              onChange={() => setSignType("signIn")}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
