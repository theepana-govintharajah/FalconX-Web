import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/consumer/register", data);
};

//Fetch all user details
const fetchUsers = async () => {
  return await axios.get("http://localhost:5000/consumer");
};

export default {
  addNew,
  fetchUsers,
};
