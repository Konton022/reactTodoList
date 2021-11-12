import * as React from "react";
import { Table, Button, Input } from "react-bootstrap";

export default function TaskTable({ tasksList, setList }) {
  function handleDelTask(id) {
    setList(tasksList.filter((item) => item.id !== id));
  }
  function handleSetDone(id) {
    // console.log(id);
    setList(
      tasksList.map((item) => {
        if (item.id === id) {
          console.log("item", item);
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Done?</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasksList.map(({ id, task, isDone }, index) => {
          return (
            <tr key={id}>
              <td>{index + 1}</td>

              <td sx={{ color: "red", width: "60%" }}>{task}</td>

              <td>
                <Input
                  type="switches"
                  checked={isDone}
                  onClick={() => handleSetDone(id)}
                />
              </td>
              <td>
                <Button onClick={() => handleDelTask(id)}>delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
