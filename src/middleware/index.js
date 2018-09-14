// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  console.log( !!app.get('PRODUCTION') ? app.get('PRODUCTION') : "DEVELOPMENT");
  app.use(function(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`)
    next();
  });
  
};
