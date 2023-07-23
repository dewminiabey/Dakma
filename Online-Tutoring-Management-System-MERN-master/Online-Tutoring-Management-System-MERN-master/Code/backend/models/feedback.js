const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create database model for feedback
const feedbackSchema = new Schema({
    username : {type: String, required: true},
    phoneNumber : {type: String},
    email : {type: String},
    description : {type: String, required: true},
    date : {type: Date, default: Date.now}
})

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;