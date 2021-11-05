import "./styles.css";
import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useState } from "react";
import { nanoid } from "nanoid";

const initState = [];

export default function App() {
  const [todoList, setToDoList] = useState(initState);
  const [task, setTask] = useState("");
  const [isDone, setDone] = useState(false);
  console.log(todoList, task);

  function handleSubmit(event) {
    event.preventDefault();
    const id = nanoid(4);
    setToDoList([...todoList, { task, id, isDone }]);
    setTask("");
  }

  function handleAddTask(event) {
    setTask(event.target.value);
  }

  function handleDelTask(id) {
    setToDoList(todoList.filter((item) => item.id !== id));
  }
  function handleSetDone(id) {
    // console.log(id);
    setToDoList(
      todoList.map((item) => {
        if (item.id === id) {
          console.log("item", item);
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  }

  return (
    <div className="App">
      <Form className="toDoTask">
        <Form.Group className="mb-3">
          <Form.Label>Task manager</Form.Label>
          <Form.Control
            value={task}
            type="text"
            placeholder="enter your text"
            onChange={handleAddTask}
          ></Form.Control>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
      <Table striped bordered hover size="sm" className="taskTable">
        <thead>
          <tr>
            <th>#</th>
            <th>task</th>
            <th>isDone</th>
            <th>delete task</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map(({ id, task, isDone }, index) => {
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{task}</td>
                <td>
                  <Button
                    onClick={() => handleSetDone(id)}
                    size="sm"
                    variant={isDone ? "primary" : "secondary"}
                  >
                    {isDone ? "Yes" : "No"}
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => handleDelTask(id)}
                    size="sm"
                    variant="secondary"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
