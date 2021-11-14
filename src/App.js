import "./styles.css";
import React from "react";
import { slice } from "./store/task";
import { useState } from "react";
import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm/TaskForm";
import { useSelector, useDispatch } from "react-redux";
import { addTask, delTask, setDone } from "./store/task";

//console.log("slice", slice);

//const initState = [{ id: 1, task: "hello", isDone: false }];

export default function App() {
  const taskRedux = useSelector((state) => state.tasks.data);

  console.log("taskRedux", taskRedux);
  const [todoList, setToDoList] = useState(taskRedux);

  return (
    <div className="App">
      <TaskForm />
      <TaskTable />
    </div>
  );
}
