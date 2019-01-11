const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resortSchema = new Schema({
    SkiArea: {
        id: {type: Number}, 
        name: { type: String },
        official_website: { type: String },
        geo_lat: { type: Number },
        geo_lng: { type: Number },

    }
});

const Resort = mongoose.model("Resort", resortSchema);

module.exports = Resort;