import "./styles.css";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

import TaskList from "./components/TaskList/index";
const initState = ["buy fresh bread", "pay for rent", "call boss"];

export default function App() {
  const [todoList, setToDoList] = useState(initState);
  const [task, setTask] = useState("");
  console.log(todoList);

  function handleSubmit(event) {
    event.preventDefault();
    setToDoList([...todoList, task]);
  }

  function handleAddTask(event) {
    setTask(event.target.value);
  }

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
        {todoList.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
