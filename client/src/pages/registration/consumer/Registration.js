import React from "react";
import { useState, useEffect } from "react";
import { useReducer } from "react";
import StextField from "../../../components/StextField";
import Sbutton from "../../../components/Sbutton";
import Button from "@mui/material//Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import VerifiedIcon from "@mui/icons-material/Verified";
import SendIcon from "@mui/icons-material/Send";
import useStyles from "./styles";

import { Formik } from "formik";
import * as Yup from "yup";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const classes = useStyles();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    validate({ [name]: value });
  };

  const validate = () => {
    let temp = {};
    temp.fName =
      (inputs.fName ? "" : "This field is required.") ||
      (/^[A-Za-z]*$/.test(inputs.fName)
        ? ""
        : "First name can only contain letters.") ||
      (inputs.fName.length > 2 ? "" : "Minimum 3 characters required.");
    temp.lName =
      (inputs.lName ? "" : "This field is required.") ||
      (/^[A-Za-z]*$/.test(inputs.lName)
        ? ""
        : "Last name can only contain letters.") ||
      (inputs.lName.length > 2 ? "" : "Minimum 3 characters required.");
    temp.email =
      (inputs.email ? "" : "This field is required.") ||
      (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)
        ? ""
        : "Email is not valid.");

    temp.mobile =
      (inputs.mobile ? "" : "This field is required.") ||
      (/^\d+$/.test(inputs.mobile)
        ? ""
        : "Phone number is not valid. It can only contains numbers") ||
      (inputs.mobile.length > 9 ? "" : "Minimum 10 numbers required.") ||
      (inputs.mobile.length < 11
        ? ""
        : "Mobile number cannot exceed 10 digits.");

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === ""); //every() method tests whether all elements in the array pass the test implemented by the provided function. It retruns a boolean value
  };

  //when submitting the form, page will be autoreload, and details will be posted in secondary user collection.
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // <Typography variant="h5" color={"white"} textAlign={"center"}>
    //   Register New Consumer!
    // </Typography>
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <AppRegistrationIcon />
        </Avatar>
        <Typography variant="h5">Register as Consumer !</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <StextField
              id="fName"
              label="First Name"
              name="fName"
              value={inputs.fName || ""}
              onChange={handleChange}
              error={errors.fName}
            />
            <StextField
              id="lName"
              label="Last Name"
              name="lName"
              value={inputs.lName || ""}
              onChange={handleChange}
              error={errors.lName}
            />
            <StextField
              id="email"
              label="Email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              error={errors.email}
            />
            <StextField
              id="mobile"
              label="Mobile Number"
              name="mobile"
              value={inputs.mobile || ""}
              onChange={handleChange}
              error={errors.mobile}
            />

            <StextField
              id="NIC"
              label="NIC Number"
              name="NIC"
              value={inputs.NIC || ""}
              onChange={handleChange}
              // error={errors.NIC}
            />

            <StextField
              id="district"
              label="District"
              name="district"
              value={inputs.district || ""}
              onChange={handleChange}
              // error={errors.district}
            />

            <StextField
              id="city"
              label="City"
              name="city"
              value={inputs.city || ""}
              onChange={handleChange}
              // error={errors.district}
            />

            <StextField
              id="street"
              label="Street"
              name="street"
              value={inputs.street || ""}
              onChange={handleChange}
              // error={errors.district}
            />

            <StextField
              label="Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              type="password"
              //error={errors.password}
            />

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
                onClick={onSubmit}
                // disabled={!(dirty && isValid)}
              >
                Register
              </Button>
            </Grid>

            {/* <Sbutton
              text="Submit"
              type="submit"
              onClick={onSubmit}
              btnWidth="20%"
              marginRight="6%"
            /> */}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Registration;
