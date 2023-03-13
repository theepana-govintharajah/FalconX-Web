import Dashboard from "./pages/admin/dashboard/Dashboard";
import Users from "./pages/admin/Users";
import Orders from "./pages/admin/Orders";
import Complaints from "./pages/admin/Complaints";
import DeliveryAgents from "./pages/admin/DeliveryAgents";
import Shops from "./pages/admin/Shops";
import Employees from "./pages/admin/Employees";
import EmployeeRegistration from "./pages/registration/employee/EmployeeRegistration";
import Layout from "./components/admin/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#673ab7",
      light: "#1F2221",
    },
  },
});

function Admin() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/deliveryAgents" element={<DeliveryAgents />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/shops" element={<Shops />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/employees" element={<Employees />} />

              <Route
                path="/EmployeeRegistration"
                element={<EmployeeRegistration />}
              />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default Admin;
