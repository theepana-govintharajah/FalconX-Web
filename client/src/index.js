import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Admin";
import Employee from "./Employee";
import Registartion from "./Registration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Admin />
    {/* <Employee /> */}
    {/* <Registartion /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
