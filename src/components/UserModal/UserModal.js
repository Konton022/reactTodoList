import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../../store/user";
import { Modal, Form, Button } from "react-bootstrap";

const UserModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signType, setSignType] = useState("signIn");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email: ", email, "password", password, "signType", signType);
    const auth = getAuth();
    switch (signType) {
      case "signUp":
        createUserWithEmailAndPassword(auth, email, password).then(
          ({ user }) => {
            console.log("signUP", user);
          }
        );

        break;

      case "signIn":
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
          console.log("Login", user);
          dispatch(addUser({ login: user.email, id: user.uid }));
        });

        break;

      default:
        alert("Repeat please");
    }

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
              label="Sign In"
              name="signType"
              defaultChecked
              onChange={() => setSignType("signIn")}
            />
            <Form.Check
              type="radio"
              label="Sign Up please if don't have an account"
              name="signType"
              onChange={() => {
                setSignType("signUp");
              }}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
