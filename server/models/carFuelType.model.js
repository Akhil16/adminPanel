const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarFuelTypeSchema = new Schema({
    fuelType: String
})

module.exports = mongoose.model('fuelType', CarFuelTypeSchema, 'fuelType');