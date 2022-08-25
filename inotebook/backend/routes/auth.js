const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    //if you want to use req.body in line 5, than you have to use middel wayer in index.js
    console.log(req.body);
    res.send('hello auth')
  })

  module.exports = router