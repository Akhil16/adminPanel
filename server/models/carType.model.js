const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarTypeSchema = new Schema({
  type: String
});

module.exports = mongoose.model("type", CarTypeSchema, "carType");
