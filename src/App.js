import "./styles.css";
import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  FormGroup,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { nanoid } from "nanoid";
import TaskTable from "./components/TaskTable";

const initState = [{ id: 1, task: "hello", isDone: false }];

export default function App() {
  const [todoList, setToDoList] = useState(initState);
  const [task, setTask] = useState("");
  const [isDone, setDone] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const id = nanoid(4);
    setToDoList([...todoList, { task, id, isDone }]);
    setTask("");
  }

  function handleAddTask(event) {
    setTask(event.target.value);
  }

  function delTask(id) {
    setToDoList(todoList.filter((item) => item.id !== id));
  }
  function setTaskDone(id) {
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
      <FormGroup className="mb-3">
        <FormLabel>Task manager</FormLabel>
        <FormControl
          value={task}
          type="text"
          placeholder="enter your task"
          onChange={handleAddTask}
        >
          <InputLabel>write your task here</InputLabel>
          <Input />
        </FormControl>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormGroup>

      <TaskTable
        tasksList={todoList}
        handleDelete={delTask}
        handleSetDone={setTaskDone}
      />
    </div>
  );
}
