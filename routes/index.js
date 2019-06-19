/**
* Combine all routes into one array
*/
const home = require('./home');
const health = require('./health');

module.exports = function initializeRoutes(app) {
  app.use('/', home);
  app.use('/health/', health);
};
