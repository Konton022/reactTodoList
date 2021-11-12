import "./styles.css";
import React from "react";
import { slice } from "./store/task";
import { useState } from "react";
import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm/TaskForm";

console.log("slice", slice);

const initState = [{ id: 1, task: "hello", isDone: false }];

export default function App() {
  const [todoList, setToDoList] = useState(initState);

  return (
    <div className="App">
      <TaskForm tasksList={todoList} setList={setToDoList} />
      <TaskTable tasksList={todoList} setList={setToDoList} />
    </div>
  );
}
