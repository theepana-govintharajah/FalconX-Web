import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Admin";
import Employee from "./Employee";
import ConsumerRegistration from "./pages/registration/consumer/ConsumerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Admin /> */}
    {/* <Employee /> */}
    <ConsumerRegistration />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
