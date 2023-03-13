import Button from "@mui/material//Button";

import ConsumerRegistration from "./pages/registration/consumer/ConsumerRegistration";
import DeliveryAgentRegistration from "./pages/registration/deliveryAgent/DeliveryAgentRegistration";
import ShopRegistration from "./pages/registration/shop/ShopRegistration";
import Layout from "./components/registration/Layout";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
      light: "#1F2221",
    },
  },
});

function Registartion() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<ConsumerRegistration />} />
              <Route
                path="/DeliveryAgentRegistration"
                element={<DeliveryAgentRegistration />}
              />
              <Route path="/ShopRegistration" element={<ShopRegistration />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default Registartion;
