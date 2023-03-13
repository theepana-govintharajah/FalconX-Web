import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/employee/register", data);
};

//Fetch all employee details
const fetchEmployee = async () => {
  return await axios.get("http://localhost:5000/employee");
};

export default {
  addNew,
  fetchEmployee,
};
