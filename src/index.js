import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import ReacTableCellOM from "react-dom";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
ReacTableCellOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
