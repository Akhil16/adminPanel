const mongoose = require("mongoose");

const Vendor = mongoose.model("vendor");
const ObjectId = require('mongoose').Types.ObjectId;


const registerVendor = async (req, res, next) => {
  let vendor = new Vendor(req.body);
  try {
    await vendor.save((err, doc) => {
      if (!err) res.status(200).json({
        message: "vendor registered successfully!",
        Vendors: doc
      });
      else {
        if (err.code == 11000)
          res.status(422).send("Duplicate email adrress found.");
      }
    });
  } catch (err) {
      res.status(500).send("Error in register.");
  }
};

const showVendors = async (req, res, next) => {
  try {
    await Vendor.find().then(documents => {
      res.status(200).json({
        message: "List fetched successfully!",
        Vendors: documents
      });
    });
  } catch (err) {
    res.status(500).send("Error in show vendors");
  }
};

const showVendor = async (req, res, next) => {
  try {
    await Vendor.findOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({
        message: "vendor Found!",
        Vendors: result
      });
    });
  } catch (err) {
    res.status(500).send("Error in show vendors");
  }
};

const updateVendor = async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

  try {
    console.log(req.params.id)
    console.log(req.body)
    let query = { _id: req.params.id };
    let newquery = {
      $set: {
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        gstin: req.body.gstin
      }
    };
    await Vendor.findOneAndUpdate(query, newquery, (err, resp) => {
    if(!err)  res.status(200).json({
        message: "vendor updated!",
        Vendors: resp
      });
      else console.log(err)
    });
  } catch (error) {
    console.log("Error in updating Vendor");
  }
};


const deleteVendor = async (req, res) => {
  try {
      let query = { _id: req.params.id }
      await Vendor.findOneAndDelete(query, (err, resp) => {
          if (!err)
              res.status(200).json({
                  message: "vendor deleted"
              });
      })
  } catch (error) {
      console.log('Error in delete');
  }
};

module.exports = { registerVendor, showVendor, showVendors, updateVendor, deleteVendor };
