var mongoose = require('mongoose'),
  baucis = require('baucis'),
  controller = baucis.rest(mongoose.model('Track'));

module.exports = function (app) {
  // app.use('/api', isLoggedIn, baucis());
  app.use('/api', baucis());
};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
