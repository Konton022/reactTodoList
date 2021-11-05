import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function TaskTable({ tasksList, handleSetDone, handleDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableCell>#</TableCell>
          <TableCell>Task</TableCell>
          <TableCell>Done?</TableCell>
          <TableCell>Delete</TableCell>
        </TableHead>
        <TableBody>
          {tasksList.map(({ id, task, isDone }, index) => {
            return (
              <TableRow key={id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{task}</TableCell>
                <TableCell>
                  <Button onClick={() => handleSetDone(id)}>
                    {isDone ? "Yes" : "No"}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(id)}>delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
