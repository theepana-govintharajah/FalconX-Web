import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/order/register", data);
};

const fetchOrders = async () => {
  return await axios.get("http://localhost:5000/order");
};

export default {
  addNew,
  fetchOrders,
};
