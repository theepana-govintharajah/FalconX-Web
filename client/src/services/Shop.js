import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/shop/register", data);
};

//Fetch all details
const fetchShops = async () => {
  return await axios.get("http://localhost:5000/shop");
};

export default {
  addNew,
  fetchShops,
};
