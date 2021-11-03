import "./styles.css";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

import TaskList from "./components/TaskList/index";
//const initState = ["buy fresh bread", "pay for rent", "do homework"];
const initState = [
  { id: 1, task: "buy fresh bread", isDone: false },
  { id: 2, task: "pay for rent", isDone: false },
  { id: 3, task: "do homework", isDone: false }
];

export default function App() {
  const [todoList, setToDoList] = useState(initState);
  const [task, setTask] = useState("");
  console.log(todoList, task);

  function handleSubmit(event) {
    event.preventDefault();
    setToDoList([...todoList, task]);
    setTask("");
  }

  function handleAddTask(event) {
    setTask(event.target.value);
  }

  function handleDelTask(id) {
    console.log(id);
  }

  return (
    <div className="App">
      <Form className="toDoTask">
        <Form.Group className="mb-3">
          <Form.Label>Add your TASK</Form.Label>
          <Form.Control
            value={task}
            type="text"
            placeholder="enter your text"
            onChange={handleAddTask}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <ListGroup className="mb-3 tasks">
        {todoList.map(({ id, task, isDone }, index) => (
          <ListGroup.Item key={index}>
            <span> {id} </span>
            <span> {task} </span>
            <Button
              variant="secondary"
              className="btn btn-sm "
              onClick={(id) => handleDelTask}
            >
              {" "}
              delete{" "}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
