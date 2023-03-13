import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/deliveryAgent/register", data);
};

//Fetch all details
const fetchDeliveryAgents = async () => {
  return await axios.get("http://localhost:5000/deliveryAgent");
};

export default {
  addNew,
  fetchDeliveryAgents,
};
