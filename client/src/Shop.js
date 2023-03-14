import Dashboard from "./pages/shop/Dashboard";
import Item from "./pages/shop/Item";
import ItemRegistration from "./pages/registration/item/ItemRegistration";
import Orders from "./pages/shop/Orders";
import Complaints from "./pages/shop/Complaints";
import Layout from "./components/shop/Layout";
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

function Employee() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/item" element={<Item />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/itemRegistration" element={<ItemRegistration />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default Employee;
