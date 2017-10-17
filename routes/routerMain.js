var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home');
});

router.get('/about', function( req, res, next) {
  var gamerBios = [
    { 
      name: 'GenderLizard',
      image: 'images/genderlizard_icon.png',
      bio: 'The bio for genderlizard, it IS beautiful and nice. It also includes relevant information.',
      twitch: 'https://www.twitch.tv/rematch_gaming',
      youtube: 'https://www.youtube.com/channel/UCHyj0igLYfZbGcKRgF8Dhyg',
      twitter: 'https://twitter.com/MaddHabitGaming',
    },
    { 
      name: 'llatlasll',
      image: 'images/llatlasll_icon.png',
      bio: 'This is a bio full of relevant information, all about llatlasll and why that is his name.',
      twitch: 'https://www.twitch.tv/rematch_gaming',
      youtube: 'https://www.youtube.com/channel/UCHyj0igLYfZbGcKRgF8Dhyg',
      twitter: 'https://twitter.com/MaddHabitGaming',
    },
  ];

  res.render('pages/about', {
    gamerBios : gamerBios,
  });
});

router.get('/stream', function( req, res, next) {
  res.render('pages/stream');
});

module.exports = router;
