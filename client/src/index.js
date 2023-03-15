import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Admin";
import Consumer from "./Consumer";
import Shop from "./Shop";
import Employee from "./Employee";
import Registartion from "./Registration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Shop /> */}
    {/* <Consumer /> */}
    <Admin />
    {/* <Employee /> */}
    {/* <Registartion /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
