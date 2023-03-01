import axios from "axios";

//adding new consumer in the database
const addNew = async (data) => {
  return await axios.post("http://localhost:5000/shop/register", data);
};

export default {
  addNew,
};
