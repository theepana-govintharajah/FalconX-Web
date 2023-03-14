import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/item/register", data);
};

//Fetch all user details
const fetchItems = async () => {
  return await axios.get("http://localhost:5000/item");
};

const updateItem = async (id, data) => {
  return await axios.patch(
    `http://localhost:5000/item/profileUpdate/${id}`,
    data
  );
};

const deleteItem = async (id) => {
  return await axios.delete(`http://localhost:5000/item/profileDelete/${id}`);
};

export default {
  addNew,
  fetchItems,
  updateItem,
  deleteItem,
};
