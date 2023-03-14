import React from "react";
import Item from "../../../services/Item";
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
  const shopId = "63feec359bf614156da487db";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    validate({ [name]: value });
  };

  const validate = () => {
    let temp = {};

    temp.itemCode =
      (inputs.itemCode ? "" : "This field is required.") ||
      (inputs.itemCode.length > 2 ? "" : "Minimum 3 characters required.");

    temp.category = inputs.category ? "" : "This field is required.";

    temp.price =
      (inputs.price ? "" : "This field is required.") ||
      (/^\d+$/.test(inputs.price)
        ? ""
        : "Phone number is not valid. It can only contains numbers");

    temp.quantity =
      (inputs.quantity ? "" : "This field is required.") ||
      (/^\d+$/.test(inputs.quantity)
        ? ""
        : "Phone number is not valid. It can only contains numbers");

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
      const payload = {
        ...inputs,
        shopId: shopId,
      };
      Item.addNew(payload).then(function (response) {
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
        <Typography variant="h5">Add New Item</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <StextField
              id="itemCode"
              label="Item Code"
              name="itemCode"
              value={inputs.itemCode || ""}
              onChange={handleChange}
              error={errors.itemCode}
            />
            <StextField
              id="category"
              label="Category"
              name="category"
              value={inputs.category || ""}
              onChange={handleChange}
              error={errors.category}
            />
            <StextField
              id="price"
              label="Price"
              name="price"
              value={inputs.price || ""}
              onChange={handleChange}
              error={errors.price}
            />
            <StextField
              id="quantity"
              label="Quantity"
              name="quantity"
              value={inputs.quantity || ""}
              onChange={handleChange}
              error={errors.quantity}
            />
            <StextField
              id="description"
              label="Description"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
              error={errors.description}
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
