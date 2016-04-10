var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

//load environment variables from .env
require('dotenv').config();

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || config.port;

//mLab recommended mongoose connection options https://gist.github.com/mongolab-org/9959376
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(process.env.MONGODB_URI, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {

  // Wait for the database connection to establish, then start the app.

  // Make models available
  var models = glob.sync(config.root + '/app/models/*.js');
  models.forEach(function (model) {
    require(model);
  });

  var app = express();

  require('./config/express')(app, config);

  app.listen(port, function () {
    console.log('Express server listening on port ' + config.port);
  });

});
