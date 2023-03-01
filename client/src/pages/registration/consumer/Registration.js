import React from "react";
import Consumer from "../../../services/Consumer";
import { useState, useEffect } from "react";
import { useReducer } from "react";
import StextField from "../../../components/StextField";

import Button from "@mui/material//Button";

import { Grid, Container, Paper, Avatar, Typography } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import useStyles from "./styles";

const Registration = () => {
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
      (inputs.mobile.length > 8 ? "" : "Minimum 10 numbers required.") ||
      (inputs.mobile.length < 12
        ? ""
        : "Mobile number cannot exceed 10 digits.");

    temp.NIC =
      (inputs.NIC ? "" : "This field is required.") ||
      (inputs.NIC.length > 9 ? "" : "Minimum 10 numbers required.") ||
      (inputs.NIC.length < 16 ? "" : "NIC cannot exceed 15 digits.");

    temp.password =
      (inputs.password ? "" : "This field is required.") ||
      (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
        inputs.password
      )
        ? ""
        : "password should contain at least one upper case letter, one lower case letter, one numerical number and a special character") ||
      (inputs.password.length > 7 ? "" : "Minimum 8 characters required.");

    temp.district =
      (inputs.district ? "" : "This field is required.") ||
      (/^[A-Za-z]*$/.test(inputs.district)
        ? ""
        : "District can only contain letters.") ||
      (inputs.district.length > 2 ? "" : "Minimum 3 characters required.");

    temp.city =
      (inputs.city ? "" : "This field is required.") ||
      (/^[A-Za-z]*$/.test(inputs.city)
        ? ""
        : "City can only contain letters.") ||
      (inputs.city.length > 2 ? "" : "Minimum 3 characters required.");

    temp.street =
      (inputs.street ? "" : "This field is required.") ||
      (inputs.street.length > 2 ? "" : "Minimum 3 characters required.");

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === ""); //every() method tests whether all elements in the array pass the test implemented by the provided function. It retruns a boolean value
  };

  //when submitting the form, page will be autoreload, and details will be posted in consumer collection.
  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("validation");
      Consumer.addNew(inputs).then(function (response) {
        console.log(response.data);
        window.location.reload(false);
      });
    }
  };

  return (
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
              error={errors.NIC}
            />

            <StextField
              id="district"
              label="District"
              name="district"
              value={inputs.district || ""}
              onChange={handleChange}
              error={errors.district}
            />

            <StextField
              id="city"
              label="City"
              name="city"
              value={inputs.city || ""}
              onChange={handleChange}
              error={errors.city}
            />

            <StextField
              id="street"
              label="Street"
              name="street"
              value={inputs.street || ""}
              onChange={handleChange}
              error={errors.street}
            />

            <StextField
              label="Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              type="password"
              error={errors.password}
            />

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
                onClick={onSubmit}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Registration;
