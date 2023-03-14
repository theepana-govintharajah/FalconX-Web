import { useEffect, useState } from "react";

import Item from "../../../services/Item";
import { Grid } from "@mui/material";
import BasicCard from "../../../components/shop/CardForItem/BasicCard";

const ItemList = () => {
  const [items, setItems] = useState([]);

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
          <BasicCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
