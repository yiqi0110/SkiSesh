import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};