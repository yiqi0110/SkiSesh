import axios from "axios";

export default {
  // Gets the user with the given id
  findUser: function (userData) {
    return axios.post("/api/users/login", userData);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  postSesh: function(seshData){
    return axios.post("/api/sesh", seshData);
  },
  findSesh: function(seshData){
    return axios.post("/api/sesh/find", seshData);
  },
  findSeshByDate: function(seshData){
    return axios.post("/api/sesh/findbydate", seshData);
  },
  findSeshByResort: function(seshData){
    return axios.post("/api/sesh/findbyresort", seshData);
  },
  findSeshForProfile: function(seshData){
    return axios.post("/api/sesh/findSeshForProfile", seshData)
  },
  getResorts: function(){
    return axios.get("/api/resorts");
  },
  getComments: function(commentData){
    return axios.post("/api/comment/grab", commentData);
  },
  postComment: function(commentData){
    console.log(commentData);
    return axios.post("/api/comment/release", commentData);
  }
};