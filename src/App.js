import "./styles.css";
import React from "react";

import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm/TaskForm";
import Navibar from "./components/Navibar/Navibar";

export default function App() {
  return (
    <div className="App">
      <Navibar />
      <TaskForm />
      <TaskTable />
    </div>
  );
}
