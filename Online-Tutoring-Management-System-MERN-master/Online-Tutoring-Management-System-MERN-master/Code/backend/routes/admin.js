//import required packages and models
const router = require("express").Router();
const bcrypt = require("bcrypt");
let Student = require("../models/admin.js");
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const Admin = require("../models/admin.js");
require("dotenv").config();


//View Admin Profile
//http://localhost:8070/admin/viewAdmin
router.route("/viewAdmin").get((req,res) => {
    Admin.find().then((admin) => {
        res.json(admin);
    }).catch((err) => {
        console.log(err);
    })
})

//Update Admin Profile
router.route("/updateAdmin").put(async(req, res) =>{
    const ID = req.body.userID;

    //create object including new details
    const updated = {
        fName, lName, userID, address, birthDate, mobile, email, nic 
    } = req.body;

    //find admin by user id and update details
    const updateAdmin = await Admin.findOneAndUpdate(ID, updated).then((updateAdmin) => {
        res.status(200).send({status: "Admin Updated Successful !", admin: updated});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Admin Update Unsuccessful !", error: err.message});
    })

})


module.exports = router;

