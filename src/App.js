import "./styles.css";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

let todoList = [];

export default function App() {
  let [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    todoList.push(task);
    setTask((prevState) => "");
    console.log("todoList", todoList);
  }

  function handleAddTask(event) {
    //console.log(event.target.value)
    setTask(event.target.value);
  }

  useEffect;

  return (
    <div className="App">
      <Form className="toDoTask">
        <Form.Group className="mb-3">
          <Form.Label>Add your TASK</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your text"
            onChange={handleAddTask}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <ListGroup>
        {todoList.forEach((element) => {
          <ListGroup.Item>{element}</ListGroup.Item>;
        })}
      </ListGroup>
    </div>
  );
}
