var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req)
  res.json({name:"RITIK KUMAR"})
});

module.exports = router;
