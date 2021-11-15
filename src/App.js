import "./styles.css";
import React from "react";

import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm/TaskForm";

export default function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskTable />
    </div>
  );
}
