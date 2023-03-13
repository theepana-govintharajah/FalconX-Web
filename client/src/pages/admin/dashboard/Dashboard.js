import { Grid } from "@mui/material";
import BasicCard from "../../../components/BasicCard";

import useStyles from "./styles";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={4}>
          <BasicCard text="Total Businesses" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Total Delivery Agents" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Total Customers" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Completed Orders" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Pending Orders" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Pending Complaints" count="3" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
