const conciergeData = require('../constants').conciergeData;

module.exports = function(app) {
  // post call for concierge
  app.post('/giveMeJPG', (req, res) => {
    //  conciergeData.setData(req.body);
    //  call chromeless
    //  render dashboard
    //  get snapshot
    //  res.send(jpg file);
    console.log(req.body);
  });
};