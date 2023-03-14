import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Sbutton from "../../Sbutton";
import CardMedia from "@mui/material/CardMedia";
import Order from "../../../services/Order";

const BasicCard = ({ item }) => {
  const consumerId = "6410a8824010c95cb9c848c1";
  const onSubmit = async (e) => {
    const orderData = {
      price: item.price,
      shopId: item.shopId,
      itemId: item._id,
      consumerId: consumerId,
    };

    Order.addNew(orderData).then(function (response) {
      console.log(response.data);
    });
  };

  return (
    <Box>
      <Card variant="outlined" sx={{ minHeight: 300, minWidth: 355 }}>
        <CardMedia
          component="img"
          sx={{ height: 300, width: 300, marginLeft: 4, marginTop: 4 }}
          image="/adminPic.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h5" textAlign="center">
            {item.itemCode}
          </Typography>
          <br />
          <Typography variant="h6">
            Price: Rs {item.price}
            <br />
            Description: {item.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Sbutton
            text="Place Order"
            btnWidth="25ch"
            marginLeft="10ch"
            onClick={onSubmit}
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default BasicCard;
