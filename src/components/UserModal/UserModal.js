import React, { useState } from "react";
import FirebaseClass from "../../service/firebase";
import { Modal, Form, Button } from "react-bootstrap";
import { signUpUser, signInUser } from "../../service/firebase.js";

const UserModal = ({ open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signType, setSignType] = useState("signIn");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("email: ", email, "password", password, "signType", signType);

    switch (signType) {
      case "signUp":
        await signUpUser(email, password).then((data) =>
          console.log("data", data)
        );

        break;

      case "signIn":
        await signInUser(email, password).then((data) =>
          console.log("data", data)
        );

        break;

      default:
        alert("Repeat please");
    }

    console.log("user", user);

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
