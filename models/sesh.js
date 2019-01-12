const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seshSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  resort: {type: String, required: true},
  skill: {type: String, required: true}
});

const Sesh = mongoose.model("Sesh", seshSchema);

module.exports = Sesh;