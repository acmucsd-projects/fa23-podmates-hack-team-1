const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //Use to setup user data base query to mongodb i think
  const user = {
    'user': 'password'
  }
  res.status(200).json({ user });
});

module.exports = router;
