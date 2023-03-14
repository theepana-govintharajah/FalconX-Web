import { Grid } from "@mui/material";
import BasicCard from "../../components/BasicCard";

import useStyles from "./../admin/dashboard/style";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={4}>
          <BasicCard text="Pending orders for pickup" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Pending orders for delivery" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Pending orders for shifting" count="2500" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Number of verified Businesses" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Number of Delivery Agents" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Number of customers" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="New Businesses" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Total Pickups" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Total Deliveries" count="3" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
