import { useLocation } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import StextField from "../../StextField";
import Sbutton from "../../Sbutton";
import Item from "../../../services/Item";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { confirm } from "react-confirm-box";

const EditItem = () => {
  const location = useLocation();
  const ID = location.state._id;
  const itemCode = location.state.itemCode;
  const category = location.state.category;
  const price = location.state.price;
  const quantity = location.state.quantity;
  const description = location.state.description;

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    validate({ [name]: value });
  };

  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/item";
    navigate(path);
  };

  const validate = () => {
    let temp = {};

    if (inputs.price !== undefined) {
      temp.price =
        (inputs.price ? "" : "This field is required.") ||
        (/^\d+$/.test(inputs.price) ? "" : "Price can only contains numbers");
    }
    if (inputs.quantity !== undefined) {
      temp.quantity =
        (inputs.quantity ? "" : "This field is required.") ||
        (/^\d+$/.test(inputs.quantity)
          ? ""
          : "Quantity can only contains numbers");
    }
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === ""); //every() method tests whether all elements in the array pass the test implemented by the provided function. It retruns a boolean value
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    if (validate()) {
      const result = await confirm(
        "Are you sure to update the details ?",
        options
      );

      if (result) {
        Item.updateItem(ID, inputs)
          .then(() => {
            console.log(ID);
            console.log(inputs);
            setInputs({});
            routeChange();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  return (
    <div>
      <div style={{ marginLeft: 400 }}>
        <img src="/adminPic.jpg" width="300" height="300" alt="" />
      </div>

      <form>
        <StextField
          label="Item Code"
          name="itemCode"
          value={inputs.itemCode !== undefined ? inputs.itemCode : itemCode}
          onChange={handleChange}
        />

        <StextField
          label="Category"
          name="category"
          value={inputs.category || category}
          onChange={handleChange}
        />

        <StextField
          label="Price"
          name="price"
          value={inputs.price || price}
          onChange={handleChange}
          error={errors.price}
        />

        <StextField
          label="Quantity"
          name="quantity"
          value={inputs.quantity || quantity}
          onChange={handleChange}
          error={errors.quantity}
        />

        <StextField
          label="Description"
          name="description"
          value={inputs.description || description}
          onChange={handleChange}
        />

        <br />
        <br />
        <Sbutton
          text="Update"
          type="submit"
          onClick={onSubmit}
          btnWidth="130ch"
          marginLeft="10ch"
        />
      </form>
    </div>
  );
};

export default EditItem;
