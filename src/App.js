//import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navibar from "./components/Navibar/Navibar";

import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navibar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
