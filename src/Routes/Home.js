import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Sign please and check{" "}
        <Link to="/projects">
          <b>my todoApp</b>
        </Link>{" "}
      </p>
    </div>
  );
}
