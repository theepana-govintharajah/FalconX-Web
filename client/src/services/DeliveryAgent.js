import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/deliveryAgent/register", data);
};

//Fetch all details
const fetchDeliveryAgents = async () => {
  return await axios.get("http://localhost:5000/deliveryAgent");
};

//Fetch all details
const fetchDeliveryAgentsDistrictBased = async (district) => {
  return await axios.get(
    `http://localhost:5000/deliveryAgent/district/${district}`
  );
};

const disableEnableEmployee = async (id) => {
  return await axios.patch(`http://localhost:5000/deliveryAgent/able/${id}`);
};

export default {
  addNew,
  fetchDeliveryAgents,
  disableEnableEmployee,
  fetchDeliveryAgentsDistrictBased,
};
