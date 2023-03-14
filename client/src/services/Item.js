import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/item/register", data);
};

//Fetch all user details
const fetchItems = async () => {
  return await axios.get("http://localhost:5000/item");
};

export default {
  addNew,
  fetchItems,
};
