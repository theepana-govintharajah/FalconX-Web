import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/order/register", data);
};

const fetchOrders = async () => {
  return await axios.get("http://localhost:5000/order");
};

const fetchOrdersBasedConsumers = async (consumerId) => {
  return await axios.get(
    `http://localhost:5000/order/consumerId/${consumerId}`
  );
};

export default {
  addNew,
  fetchOrders,
  fetchOrdersBasedConsumers,
};
