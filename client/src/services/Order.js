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

const fetchOrdersBasedShop = async (shopId) => {
  return await axios.get(`http://localhost:5000/order/shopId/${shopId}`);
};

const fetchUnhandledOrdersBasedShop = async (shopId) => {
  return await axios.get(
    `http://localhost:5000/order/unhandled/shopId/${shopId}`
  );
};

export default {
  addNew,
  fetchOrders,
  fetchOrdersBasedConsumers,
  fetchOrdersBasedShop,
  fetchUnhandledOrdersBasedShop,
};
