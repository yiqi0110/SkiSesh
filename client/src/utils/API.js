import axios from "axios";

export default {
  // Gets the user with the given id
  findUser: function (userData) {
    return axios.post("/api/users/login", userData);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  }
};