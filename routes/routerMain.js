var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home');
});

router.get('/about', function( req, res, next) {
  res.render('pages/about');
});

router.get('/stream', function( req, res, next) {
  res.render('pages/stream');
});

module.exports = router;
