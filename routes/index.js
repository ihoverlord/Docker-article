var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(process.env.PORT)
  res.render('index', { title: 'Express', port: process.env.PORT, mode: process.env.MODE });
});

module.exports = router;
