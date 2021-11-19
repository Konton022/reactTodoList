import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTaskData } from "../../store/task";
import { delTask, setDone } from "../../store/task";

import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

export default function TaskTable() {
  const taskReducer = useSelector(selectTaskData);
  const [tasksList, setList] = useState(taskReducer);
  const dispatch = useDispatch();
  // console.log("TT taskReducer", taskReducer);

  useEffect(() => {
    setList(taskReducer);
  }, [taskReducer]);

  function handleDelTask(id) {
    console.log("id", id, taskReducer);

    //setList(tasksList.filter((item) => item.id !== id));
    dispatch(delTask(id));
  }
  function handleSetDone(id) {
    // console.log(id);
    // setList(
    //   tasksList.map((item) => {
    //     if (item.id === id) {
    //       console.log("item", item);
    //       item.isDone = !item.isDone;
    //     }
    //     return item;
    //   })
    // );
    dispatch(setDone(id));
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="col-md-1">#</th>
          <th className="col-md-1">id</th>
          <th className="col-md-8">Task</th>
          <th className="col-md-1">Done?</th>
          <th className="col-md-1">Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasksList.map(({ id, task, isDone }, index) => {
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{id}</td>
              <td>{task}</td>

              <td>
                <input
                  type="checkbox"
                  defaultChecked={isDone}
                  onClick={() => handleDelTask(id)}
                />
              </td>
              <td>
                <Button size="sm" onClick={() => handleSetDone(id)}>
                  delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
