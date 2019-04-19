const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    carName: { type: String },
    carBrand: { type: String },
    carType: { type: String },
    price: { type: Number },
    isSold: { type: Boolean },
    isNewCar: { type: Boolean },
    color: { type: String },
    fuelType: { type: String },
    mileage: { type: Number },
    engineDisplacement: { type: Number },
    seat: { type: Number },
    transmission: { type: String },
    year: { type: Number },
    distanceDriven: { type: Number },
    insured: { type: Boolean }
})

const Car = mongoose.model('cars', CarSchema, 'cars');
module.exports = Car;