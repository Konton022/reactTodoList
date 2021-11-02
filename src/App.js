import "./styles.css";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

import TaskList from "./components/TaskList/index";

export default function App() {
  const [todoList, setToDoList] = useState([
    "buy fresh bread",
    "pay for rent",
    "call boss",
  ]);
  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setToDoList(todoList.push(task));
    console.log("todoList", todoList);
  }

  function handleAddTask(event) {
    //console.log(event.target.value)
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
    </div>
  );
}
