const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a model for student
const studentSchema = new Schema({
    userID: { type: String, required: true, unique: true},
    name: { type: String},
    address: { type: String},
    birthDate: { type: Date},
    NIC: { type: String},
    mobile: { type: Number},
    email: { type: String},
    assignedDate: { type: Date, default: Date.now},
    password: { type: String, required: true}
});

//define the collection
const Student = mongoose.model("Students_Detail", studentSchema);

module.exports = Student; //export the module