//import required packages and models
const router = require("express").Router();
const bcrypt = require("bcrypt");
let Student = require("../models/student.js");
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
require("dotenv").config();


//ADD STUDENT
//http//localhost:8070/student/addStudent
//getting student data from frontend as a request
router.route("/addStudent", [

    //validate details
    check('userID', 'User ID is Required !').not().isEmpty(),
    check('name', 'Name is Required !').not().isEmpty(),
    check('address', 'Address is Required !').not().isEmpty(),
    check('birthDate', 'Birth Date is Required !').not().isEmpty(),
    check('mobile', 'Mobile Number is Required !').not().isEmpty(),
    check('email', 'Enter a Valid Email !').isEmail(),
    check('password', 'Enter a Password With 6 or More Characters !').isLength({min: 6})
   
]).post(async(req, res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.send(400).json({errors: errors.array()});
    }
    //res.send('Add Student Route');

    //destrucure the request body and get details
    const {userID, name, address, birthDate, NIC, mobile, email, assignedDate, password} = req.body;

    try{
        //check if the student is already registerd
        let student = await Student.findOne({userID});
        if(student){
            res.send('User Already Exists !');
            return res.status(400).json({errors} [{msg: 'User Already Exists'}]);
        }

        //create the student object and initialize above variables
        student = new Student({userID, name, address, birthDate, NIC, mobile, email, assignedDate, password})
        
        //encrypt password
        student.password = await bcrypt.hash (password, 10);

        //save the data to database
        await student.save();
        //res.send('Student Registered !')

        //return jasonwebtoken
        const payLoad = {
            student:{
                id: student.id
            }
        }

        //sign the token
        jwt.sign(payLoad, process.env.JWTSECRET, {expiresIn: 360000}, (err, token) => {
            if(err) throw err;
            res.json({token}); //return token
        });

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error !')
    }})


/*.........................................................................................*/

//UPDATE PASSWORD
//http//localhost:8070/student/updatePassword/id
//get specific student id from frontend 
router.route("/updatePassword").put (async (req, res) => {
    //let stdID = req.params.id;

    let ID = req.body.userID;
    let newPassword = req.body.password; //catch password from request 

    newPassword = await bcrypt.hash (newPassword, 10); 

    const updatedPWD = {newPassword}; //create object including new password

    //find student by id and update password
    const updatePassword = await Student.findOneAndUpdate(ID, updatedPWD).then((updatePassword) => {
        res.status(200).send({status: "Password successfully updated !", student: updatePassword});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Password updation unsuccessful !", error: err.message});
    })

})

/*.........................................................................................*/

//DELETE STUDENT
//http//localhost:8070/student/deleteStudent/id
//get specific student id from frontend 
router.route("/deleteStudent").delete (async (req, res) => {
    //let stdID = req.params.id;
    let ID = req.body.userID;

    //find student by id and login
    const deleteStudent = await Student.findOneAndDelete(ID).then(() => {
        res.status(200).send({status: "Student Deleted !"});
    }).catch((err) => {
        console.log(err.message);
        req.status(500).send({status: "Deletion Unsuccessful !"});
    })
})

/*.........................................................................................*/

//VIEW ALL STUDENTS
//http//localhost:8070/student/
router.route("/").get(async(req, res) => {
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports = router; //export the module
