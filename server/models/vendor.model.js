const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    userName: {
        type: String,
        required: 'username can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    contact: {
        type: Number,
        required: 'contact can\'t be empty',
        minlength : [10,'contact must be atleast 10 character long']
    },
    gstin: {
        type: String,
        required: 'gstin can\'t be empty',
        minlength : [12,'gstin must be atleast 12 character long']
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },

    saltSecret: String
});

// Custom validation for email
vendorSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
vendorSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

 mongoose.model('vendor', vendorSchema);

// module.exports = vendor;