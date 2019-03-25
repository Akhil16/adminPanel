const mongoose = require("mongoose");

const Car = require("../models/car.model");
const carBrand = require("../models/carBrand.model");
const carType = require("../models/carType.model");
const carColor = require("../models/carColors.model");
const carFuelType = require("../models/carFuelType.model");
const carSeat = require("../models/carSeat.model");
const carTrasmission = require("../models/carTransmission.model");

const getcars = async (req, res) => {
  try {
    await Car.find({}, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in getall");
  }
};

const postcar = async (req, res) => {
  try {
    let car = new Car(req.body);
    await car.save();
    res.send(car);
  } catch (err) {
    console.log("Error in addcar");
  }
};

const putcar = async (req, res) => {
  try {
    let query = { _id: req.params.id };
    let newquery = {
      $set: {
        carName: req.body.carName,
        CarBrand: req.body.CarBrand,
        CarType: req.body.CarType,
        price: req.body.price,
        isSold: req.body.isSold,
        isNewCar: req.body.isNewCar,
        color: req.body.color,
        fuelType: req.body.fuelType,
        mileage: req.body.mileage,
        engineDisplacement: req.body.engineDisplacement,
        seat: req.body.seat,
        transmission: req.body.transmission,
        year: req.body.year,
        distanceDriven: req.body.distanceDriven,
        insured: req.body.insured
      }
    };

    await Car.findOneAndUpdate(query, newquery, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in updatecar");
  }
};

const deletecar = async (req, res) => {
  try {
    let query = { _id: req.params.id };
    await Car.findOneAndDelete(query, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in delete");
  }
};

const getCarBrand = async (req, res) => {
  try {
    await carBrand.find({}, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in getCarBrand");
  }
};

const getCarType = async (req, res) => {
  try {
    await carType.find({}, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in getCarType");
  }
};

const getColor = async (req, res) => {
  try {
    await carColor.find({}, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in getCarType");
  }
};

const getCarFuelType = async (req, res) => {
  try {
    await carFuelType.find({}, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in getCarFuelType");
  }
};

const getCarSeat = async (req, res) => {
  try {
    await carSeat.find({}, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in getCarSeat");
  }
};

const getCarTrasmission = async (req, res) => {
  try {
    await carTrasmission.find({}, (err, resp) => {
      if (!err) res.send(resp);
    });
  } catch (error) {
    console.log("Error in getCarTrasmission");
  }
};

module.exports = {
  getcars,
  postcar,
  putcar,
  deletecar,
  getCarBrand,
  getCarType,
  getColor,
  getCarFuelType,
  getCarSeat,
  getCarTrasmission
};
