import Dashboard from "./pages/employee/Dashboard";
import DeliveryAgents from "./pages/employee/DeliveryAgents";
import Businesses from "./pages/employee/Businesses";
import Orders from "./pages/employee/Orders";
import Complaints from "./pages/employee/Complaints";
import Layout from "./components/employee/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#673ab7",
      light: "#1F2221",
    },
  },
});

function Employee() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/deliveryAgents" element={<DeliveryAgents />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/businesses" element={<Businesses />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default Employee;
