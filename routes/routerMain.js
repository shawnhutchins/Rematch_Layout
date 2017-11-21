var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var featuredVideos = [
    {
      url: 'https://www.youtube.com/watch?v=96J5YyRn80k',
      id: '96J5YyRn80k',
      title: 'DREAM DADDY Ep. 2- Julian and Eli',
      date: 'Published on Aug 20, 2017'
    },
    {
      url: 'https://www.youtube.com/watch?v=7s-PxLGjhIw',
      id: '7s-PxLGjhIw',
      title: 'Virginia- The First Twenty',
      date: 'Published on Aug 19, 2017'
    },
    {
      url: 'https://www.youtube.com/watch?v=0DUMaV1bVHk',
      id: '0DUMaV1bVHk',
      title: 'Why you need a Wraith- Lawbreakers Blitzball',
      date: 'Published on Aug 14, 2017'
    },
    { 
      url: 'https://www.youtube.com/watch?v=z59Tz1AJsqc',
      id: 'z59Tz1AJsqc',
      title: 'Six Shots- The First Twenty',
      date: 'Published on Aug 13, 2017'
    }
  ];

  var newVideos = [
    {
      url: 'https://www.youtube.com/watch?v=96J5YyRn80k',
      id: '96J5YyRn80k',
      title: 'DREAM DADDY Ep. 2- Julian and Eli',
      date: 'Published on Aug 20, 2017'
    },
    {
      url: 'https://www.youtube.com/watch?v=7s-PxLGjhIw',
      id: '7s-PxLGjhIw',
      title: 'Virginia- The First Twenty',
      date: 'Published on Aug 19, 2017'
    },
    {
      url: 'https://www.youtube.com/watch?v=0DUMaV1bVHk',
      id: '0DUMaV1bVHk',
      title: 'Why you need a Wraith- Lawbreakers Blitzball',
      date: 'Published on Aug 14, 2017'
    },
    { 
      url: 'https://www.youtube.com/watch?v=z59Tz1AJsqc',
      id: 'z59Tz1AJsqc',
      title: 'Six Shots- The First Twenty',
      date: 'Published on Aug 13, 2017'
    }
  ];


  res.render('pages/home', {
    featuredVideos : featuredVideos,
    newVideos      : newVideos,
  });
});

router.get('/about', function( req, res, next) {
  var gamerBios = [
    { 
      name: 'GenderLizard',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/86440cc77f5c995e-profile_image-300x300.png',
      bio: 'The bio for genderlizard, it IS beautiful and nice. It also includes relevant information.',
      twitch: 'https://www.twitch.tv/genderlizard',
      youtube: 'https://www.youtube.com/channel/UCmP-HDKtj2zuUTKJYb70H_Q',
      twitter: 'https://www.twitch.tv/genderlizard',
    },
    {
      name: 'B00cup',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7f8f253f13811620-profile_image-300x300.jpeg',
      bio: 'This bio for B00cup, is very accurate. Much attention was paid to all the details.',
      twitch: 'https://www.twitch.tv/b00cup',
      youtube: 'https://www.youtube.com/channel/UCHyj0igLYfZbGcKRgF8Dhyg',
      twitter: 'https://twitter.com/ReMatch_B00cup'
    },
    { 
      name: 'llatlasll',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bbdbf217d0a6e49c-profile_image-300x300.png',
      bio: 'This is a bio full of relevant information, all about llatlasll and why that is his name.',
      twitch: 'https://www.twitch.tv/llatlasll',
      youtube: 'https://www.youtube.com/channel/UCHyj0igLYfZbGcKRgF8Dhyg',
      twitter: 'https://twitter.com/ReMatch_Atlas',
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
