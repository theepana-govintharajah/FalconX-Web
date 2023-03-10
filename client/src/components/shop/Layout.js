import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {
  DashboardOutlined,
  PeopleAltOutlined,
  WorkOutline,
  FeedbackOutlined,
} from "@mui/icons-material";

import useStyles from "../../styles/styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "Dashboard",
      path: "/",
      icon: <DashboardOutlined />,
    },
    {
      text: "Item",
      path: "/item",
      icon: <WorkOutline />,
    },

    {
      text: "Orders",
      path: "/orders",
      icon: <WorkOutline />,
    },

    {
      text: "Complaints",
      path: "/complaints",
      icon: <FeedbackOutlined />,
    },
  ];

  return (
    <div className={classes.root}>
      {/* Appbar */}
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.pageTitle}>Welcome !</Typography>
          <Typography>Gowsik</Typography>
          <Avatar
            className={classes.avatar}
            src={require("../../assets/adminPic.jpg")}
          />
        </Toolbar>
      </AppBar>

      {/* Side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.title}>
          <Typography variant="h5">FalconX</Typography>
        </div>

        {/* Menu List */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon style={{ color: "white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

        <div>
          <Typography></Typography>
        </div>
      </Drawer>

      {/* Content */}
      <div className={classes.page}>
        <div className={classes.htoolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
