const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSeatSchema = new Schema({
  seat: Number
});

module.exports = mongoose.model("seat", CarSeatSchema, "seat");
