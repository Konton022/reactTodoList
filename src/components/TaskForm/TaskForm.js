import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../store/task";

import { nanoid } from "nanoid";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TaskForm = ({ tasksList, setList }) => {
  const taskRedux = useSelector((state) => state.tasks.data);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [isDone, setDone] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // const id = nanoid(4);
    // setList([...tasksList, { task, id, isDone }]);
    // setTask("");
    dispatch(addTask(task));
  }

  function handleAddTask(event) {
    setTask(event.target.value);
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label as={"h5"}>Enter your task</Form.Label>
        <Form.Control
          value={task}
          type="text"
          placeholder="buy new bike for example"
          onChange={handleAddTask}
        />
      </Form.Group>
      <Button type="submit" className="m-1 mb-3" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="secondary" type="reset" className="m-1 mb-3">
        Reset
      </Button>
    </Form>
  );
};

export default TaskForm;
