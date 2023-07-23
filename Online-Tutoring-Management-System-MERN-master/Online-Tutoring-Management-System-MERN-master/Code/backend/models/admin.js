const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
    fName: {type: String},
    lName: {type: String},
    userID: {type: String},
    address: {type: String},
    birthDate: {type: Date},
    mobile: {type: Number},
    email: {type: String},
    nic: {type: String}
});

const Admin = mongoose.model("Admin_Detail", AdminSchema);
module.exports = Admin;