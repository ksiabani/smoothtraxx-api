var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
// Require giphy with the public beta key
  giphy = require('giphy-api')();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  // Search with options using promise
  giphy.search({
    q: 'music',
    limit: 1,
    offset: Math.floor(Math.random() * (1000)) //Math.random() * (max - min) + min;
  }).then(function (giphyRes) {
    // Res contains gif data!
    //console.log(giphyRes);
    res.render('index', {
      title: 'Smoothtraxx API',
      img_src: giphyRes.data[0].images.downsized.url
    });

  });

});



