import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./Admin";
import Employee from "./Employee";
import ConsumerRegistration from "./pages/registration/consumer/ConsumerRegistration";
import reportWebVitals from "./reportWebVitals";
import DeliveryAgentRegistration from "./pages/registration/deliveryAgent/DeliveryAgentRegistration";
import EmployeeRegistration from "./pages/registration/employee/EmployeeRegistration";
import ShopRegistration from "./pages/registration/shop/ShopRegistration";

ReactDOM.render(
  <React.StrictMode>
    {/* <Admin /> */}
    {/* <Employee /> */}
    <ShopRegistration />
    {/* <EmployeeRegistration /> */}
    {/* <DeliveryAgentRegistration /> */}
    {/* <ConsumerRegistration /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
