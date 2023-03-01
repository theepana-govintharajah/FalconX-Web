import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StextField = ({
  label,
  name,
  value,
  onChange,
  type,
  ref,
  error = null,
}) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            marginLeft: 15,
            marginRight: 10,
            marginTop: 2,
            marginBottom: 2,
            width: "120ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          variant="outlined"
          color="primary"
          name={name}
          label={label}
          value={value}
          onChange={onChange}
          type={type}
          ref={ref}
          {...(error && { error: true, helperText: error })}
          // sx={{ marginLeft: "10rem" }}
        />
      </Box>
    </div>
  );
};

export default StextField;
