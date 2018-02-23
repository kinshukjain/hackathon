const conciergeData = require('../constants').conciergeData;

module.exports = function(app) {
  // post call for concierge
  app.post('/giveMeJPG', (req, res) => {
    console.log(req.body);
    // conciergeData.setData(req.body);
  });
};