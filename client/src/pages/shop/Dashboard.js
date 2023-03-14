import { Grid } from "@mui/material";
import BasicCard from "../../components/BasicCard";

import useStyles from "./../admin/dashboard/style";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={4}>
          <BasicCard text="Total Orders" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Pending Orders" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Showcase Items" count="3" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Sales amount" count="300,000" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Pending amount" count="2500" />
        </Grid>
        <Grid item xs={4}>
          <BasicCard text="Pending Complaints" count="3" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
