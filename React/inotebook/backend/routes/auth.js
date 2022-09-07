const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Thisis$token';

//ROUTE 1: Create a User using: POST "/api/auth/createuser". no login required
//if you want to use req.body, than you have to use middel wayer in index.js
router.post(
  "/createuser",
  [
    body("name", "Enter the valid name").isLength({ min: 4 }),
    body("email", "Enter the valid email").isEmail(),
    body("password", "password must contain minimum 8 character").isLength({
      min: 8,
      max: 16,
    }),
  ],
   async (req, res) => {
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{//idealy we don/t use try and catch ,we put it in Logger or SQS 
      // Check whether the user with this email exist already
      const salt =await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt)

       // Create a new User
       user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {id: user.id}
      }

      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(jwtData);

        // res.json(user)
        res.json({authtoken});
      
      let user = user.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "Sorry a user with this email already exist"});
      }
  
}catch(error){
  console.error(error.message)
  res.status(500).send("Internal Server Error");
}
  }
);



// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter the valid email").isEmail(),
    body("password", "password Cannot be block").exists()
  ],async (req, res) => {

    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try{
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "please try to login with correct credentials"});
      }
      
      const passwordComapare =await bcrypt.compare(password, user.password);
      if(!passwordComapare){
        return res.status(400).json({error: "please try to login with correct credentials"});
      }

      const data = {
        user: {id: user.id}
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken});

    }catch(error){
      console.error(error.message)
      res.status(500).send("Internal Server Error");
    }

   });
//ROUTE 3: Get loggedin user details using: POST "/api/auth/getUser". Login required
router.post('/getuser',fetchuser,async (req, res) => {
try{
  userId = req.user.id;
  const user = await User.findById(userId).select('-password')
  res.send(user);
}catch(error){
  console.error(error.message)
  res.status(500).send("Internal Server Error");
}
});


module.exports = router;
