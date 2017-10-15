var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function( req, res, next) {
  res.render('about');
});

router.get('/stream', function( req, res, next) {
  res.render('stream');
});

module.exports = router;
