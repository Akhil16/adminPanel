const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarColorSchema = new Schema({
    color: String
})

module.exports = mongoose.model('Color', CarColorSchema, 'color');