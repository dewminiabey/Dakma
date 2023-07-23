const { Router } = require("express");
const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const Student = require("../models/student");
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require("dotenv").config();

router.get('/', auth, async (req, res) => {
    try{
        const student = await Student.findById(req.student.id);
        res.json(student);
    }catch(err){
        console.err(err.message);
        res.status(500).send('Server Error !');
    }  
});

//Login student
router.route("/login", [

    //validate details
    check('userID', 'User ID is Required !').not().isEmpty(),
    check('password', 'Password is Required !').exists()
   
]).post(async(req, res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.send(400).json({errors: errors.array()});
    }

    //destrucure the request body and get details
    const {userID, password} = req.body;
    
    try{
        //check if the student is already registerd
        let student = await Student.findOne({userID});
        if(!student){
            res.send('User Not Found !');
            return res.status(400).json({errors} [{msg: 'User Already Exists'}]);
        }
      
        //check the password is matching with stored password
        const isMatch = await bcrypt.compare(password, student.password);

        if(!isMatch){
            return res.status(400).json({errors: [{msg: 'Invalid Login Credentials !'}]});
        }

        //return jasonwebtoken
        const payLoad = {
            student:{
                id: student.id
            }
        }

        //sign the token
        jwt.sign(payLoad, process.env.JWTSECRET, {expiresIn: 360000}, (err, token) => {
            if(err) throw err;
            return res.json({token}); //return token
        });

    }catch(err){
        console.log(err.message);
        return res.status(500).send('Server Error !')
    }})

module.exports = router;