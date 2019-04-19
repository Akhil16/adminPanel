const express = require('express');
const router = express.Router();

const vendorController = require('../controllers/vendor.controller');
const carController =  require('../controllers/car.controller');

//adminVendorPanel
router.post('/vendors/new', vendorController.registerVendor);
router.get('/vendors', vendorController.showVendors);
router.get('/vendors/:id', vendorController.showVendor);
router.put('/vendors/:id', vendorController.updateVendor);
router.delete('/vendors/:id', vendorController.deleteVendor);

// adminCarPanel
router.get('/cars',carController.getcars);
router.post('/car',carController.postcar);
router.put('/car/:id',carController.putcar);
router.delete('/car/:id',carController.deletecar);

router.get('/carBrand',carController.getCarBrand);
router.get('/carType',carController.getCarType);
router.get('/color',carController.getColor);
router.get('/carFuelType',carController.getCarFuelType);
router.get('/carSeat',carController.getCarSeat);
router.get('/carTransmission',carController.getCarTrasmission);

//users

module.exports = router;