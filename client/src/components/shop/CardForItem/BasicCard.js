import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Sbutton from "../../Sbutton";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Item from "../../../services/Item";

const BasicCard = ({ item }) => {
  const onDelete = async (e) => {
    Item.deleteItem(item._id);
    window.location.reload(false);
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
            Quantity: {item.quantity}
            <br />
            Description: {item.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            to="/editItem"
            state={item}
            className="link"
            style={{ marginRight: "5%" }}
          >
            <Sbutton text="Edit" btnWidth="15ch" marginLeft="5ch" />
          </Link>

          <Sbutton
            text="Delete"
            btnWidth="15ch"
            marginLeft="3ch"
            onClick={onDelete}
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default BasicCard;
