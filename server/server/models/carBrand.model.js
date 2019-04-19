const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarBrandSchema = new Schema({
    brand: String
})

module.exports = mongoose.model('brand', CarBrandSchema, 'carBrand');