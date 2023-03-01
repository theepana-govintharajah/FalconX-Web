import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Admin";
import Employee from "./Employee";
import ConsumerRegistration from "./pages/registration/consumer/ConsumerRegistration";
import reportWebVitals from "./reportWebVitals";
import DeliveryAgentRegistration from "./pages/registration/deliveryAgent/DeliveryAgentRegistration";

ReactDOM.render(
  <React.StrictMode>
    {/* <Admin /> */}
    {/* <Employee /> */}
    <DeliveryAgentRegistration />
    {/* <ConsumerRegistration /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
