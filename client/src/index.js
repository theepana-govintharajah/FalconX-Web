import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Admin";
import Employee from "./Employee";
import Registartion from "./Registration";
import reportWebVitals from "./reportWebVitals";
import EmployeeRegistration from "./pages/registration/employee/EmployeeRegistration";

ReactDOM.render(
  <React.StrictMode>
    {/* <Admin /> */}
    {/* <Employee /> */}
    <Registartion />
    {/* <EmployeeRegistration /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
