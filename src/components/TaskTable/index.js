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
                  onClick={() => handleSetDone(id)}
                />
              </td>
              <td>
                <Button size="sm" onClick={() => handleDelTask(id)}>
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
