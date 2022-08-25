const express = require('express');
const User = require('../models/User');
const router = express.Router();


//Create a User using: POST "/api/auth". Doesn't require Auth
router.post('/', (req, res) => {
    //if you want to use req.body in line 5, than you have to use middel wayer in index.js
    console.log(req.body);
    //this is for save the data in data base
    const users = User(req.body);
    users.save()
    res.send(req.body)
  })

  module.exports = router