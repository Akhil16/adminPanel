const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarTransmissionSchema = new Schema({
    transmission: String
})

module.exports = mongoose.model('transmission', CarTransmissionSchema, 'transmission');
