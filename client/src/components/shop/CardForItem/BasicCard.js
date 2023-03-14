import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Sbutton from "../../Sbutton";
import CardMedia from "@mui/material/CardMedia";

const BasicCard = ({ text1, price, quantity, description }) => {
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
            {text1}
          </Typography>
          <br />
          <Typography variant="h6">
            Price: Rs {price}
            <br />
            Quantity: {quantity}
            <br />
            Description: {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Sbutton text="Edit" btnWidth="15ch" marginLeft="5ch" />
          <Sbutton text="Delete" btnWidth="15ch" marginLeft="3ch" />
        </CardActions>
      </Card>
    </Box>
  );
};

export default BasicCard;
