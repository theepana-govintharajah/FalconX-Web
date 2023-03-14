// import { Grid } from "@mui/material";
// import BasicCard from "../../../components/BasicCard";

// import useStyles from "./style";

// const ItemList = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Grid container spacing={4} className={classes.gridContainer}>
//         <Grid item xs={4}>
//           <BasicCard text="Total Businesses" count="3" />
//         </Grid>
//         <Grid item xs={4}>
//           <BasicCard text="Total Delivery Agents" count="3" />
//         </Grid>
//         <Grid item xs={4}>
//           <BasicCard text="Total Customers" count="3" />
//         </Grid>
//         <Grid item xs={4}>
//           <BasicCard text="Completed Orders" count="3" />
//         </Grid>
//         <Grid item xs={4}>
//           <BasicCard text="Pending Orders" count="3" />
//         </Grid>
//         <Grid item xs={4}>
//           <BasicCard text="Pending Complaints" count="3" />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ItemList;

import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { confirm } from "react-confirm-box";
import Typography from "@mui/material/Typography";
import Sbutton from "../../Sbutton";
import useStyles from "./style";
import Item from "../../../services/Item";

const line = {
  backgroundColor: "#ffffff",
};

const options = {
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel",
  },
};

const ItemList = () => {
  const [items, setItems] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    Item.fetchItems()
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <>
            <Card className={classes.root}>
              <div className={classes.content}>
                <CardContent className={classes.details}>
                  <Typography gutterBottom variant="h5" component="div">
                    gdfgf
                  </Typography>
                </CardContent>
              </div>

              <CardActions>
                <Sbutton text="Edit" btnWidth="15ch" />
                <Sbutton text="Delete" btnWidth="15ch" />
              </CardActions>
            </Card>
            <hr style={line} />
          </>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
