const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Create a User using: POST "/api/auth/createuser". no login required
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
  (req, res) => {
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exist already
    try{//idealy we don/t use try and catch ,we put it in Logger or SQS 

    let user = user.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "Sorry a user with this email already exist"});
    }

    // Create a new User
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      res.json(user)

}catch(error){
  console.error(error.message)
  res.status(500).send("some error occured");
}
  }
);

module.exports = router;
