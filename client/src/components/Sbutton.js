import Button from "@mui/material//Button";

const Sbutton = ({ text, onClick, btnWidth, marginLeft, marginRight }) => {
  const btnStyle = {
    width: btnWidth,
    marginLeft: marginLeft,
    marginRight: marginRight,
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={btnStyle}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default Sbutton;
