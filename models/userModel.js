const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    suite: String,
    city: { type: String, required: true, match: /^[a-zA-Z\s]+$/ },
    zipcode: { type: String, required: true, match: /^\d{5}-\d{4}$/ },
    geo: {
        lat: String,
        lng: String
    }
});

const companySchema = new mongoose.Schema({
    name: String,
    catchPhrase: String,
    bs: String
});

const userModel = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, minlength: 4 },
    email: { type: String, required: true, match: /^\S+@\S+\.\S+$/ },
    address: addressSchema,
    phone: { type: String, required: true, match: /^\d-\d{3}-\d{3}-\d{4}$/ },
    website: { type: String, required: true, match: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/ },
    company: companySchema
});

const User = mongoose.model('User', userModel);

module.exports = User;