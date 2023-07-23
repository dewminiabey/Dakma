const router = require("express").Router();
let Feedback = require("../models/feedback.js");
const {check, validationResult} = require('express-validator');


//Add Feedback
router.route("/addFeedback", [
    //validate details
    check('username', 'Username is required !').not().isEmpty(),
    check('email', 'Enter a corret email address !').isEmail(),
    check('description', 'description is required !').not().isEmpty(),

]).post(async(req, res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.send(400).json({errors: errors.array()})
    }

    //desctucture the request body and get feedback details
    const {username, phoneNumber, email, description} = req.body;

    try{

        //create a feedback details object and initilize above variables
        let feedback = new Feedback({username, phoneNumber, email, description})

        //save feedback details to the database
        await feedback.save();
        
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error !');
        
    }
  
})



//View Feedbacks
router.route("/").get((req,res)=>{
    Feedback.find().then((feedbacks)=>{
        res.json(feedbacks)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;