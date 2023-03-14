import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { confirm } from "react-confirm-box";
import Typography from "@mui/material/Typography";
import Sbutton from "../../Sbutton";
import useStyles from "./style";
import Item from "../../../services/Item";
import { Grid } from "@mui/material";
import BasicCard from "../../../components/shop/CardForItem/BasicCard";

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
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid key={item._id} item xs={12} sm={8} md={6} lg={4}>
          <BasicCard
            text1={item.itemCode}
            price={item.price}
            quantity={item.quantity}
            description={item.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
