import Dashboard from "./pages/consumer/Dashboard";
import Orders from "./pages/consumer/Orders";
import Complaints from "./pages/consumer/Complaints";
import Layout from "./components/consumer/Layout";
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

function Consumer() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />

              <Route path="/orders" element={<Orders />} />

              <Route path="/complaints" element={<Complaints />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default Consumer;
