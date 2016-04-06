var mongoose = require('mongoose'),
  baucis = require('baucis'),
  controller = baucis.rest(mongoose.model('Track'));

module.exports = function (app) {
  app.use('/api', baucis());
};
