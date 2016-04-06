var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Track = mongoose.model('Track');

module.exports = function (app) {
  app.use('/api/playlist', router);
};

router.get('/', function (req, res, next) {

  var query = Track.find({}).limit(10);

  query.exec(function (err, tracks) {

    if (err) return next(err);

    res.render('index', {
      title: tracks,
      tracks: tracks
    });

  });

});
