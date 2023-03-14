import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/shop/register", data);
};

//Fetch all details
const fetchShops = async () => {
  return await axios.get("http://localhost:5000/shop");
};

//Fetch all details
const fetchShopsDistrictBased = async (district) => {
  return await axios.get(`http://localhost:5000/shop/district/${district}`);
};

const disableEnableShop = async (id) => {
  return await axios.patch(`http://localhost:5000/shop/able/${id}`);
};

export default {
  addNew,
  fetchShops,
  disableEnableShop,
  fetchShopsDistrictBased,
};
