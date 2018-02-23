// index.js

const conciergeRoutes = require('./concierge_routes');
const pradaRoutes = require('./prada_routes');

module.exports = function (app) {
  conciergeRoutes(app);
  pradaRoutes(app);
  // Other route groups could go here, in future
};