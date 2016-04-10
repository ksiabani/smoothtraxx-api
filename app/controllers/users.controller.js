module.exports = function (app, passport) {

  app.get('/', function (req, res) {
    res.render('index.swig'); // load the index.ejs file
  });

  // No login form is used at the moment
  //app.get('/login', function(req, res) {
  //  res.render('login.swig', { message: req.flash('loginMessage') });
  //});

  // We post to /login to authenticate our session
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/', // redirect to home page on success
    failureRedirect: '/', // for now, redirect to home page on failure too
    failureFlash: true // allow flash messages
  }));


  // logout
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
