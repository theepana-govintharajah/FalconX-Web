import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/consumer/register", data);
};

//Fetch all user details
const fetchUsers = async () => {
  return await axios.get("http://localhost:5000/consumer");
};

const disableEnableConsumer = async (id) => {
  return await axios.patch(`http://localhost:5000/consumer/able/${id}`);
};

export default {
  addNew,
  fetchUsers,
  disableEnableConsumer,
};
