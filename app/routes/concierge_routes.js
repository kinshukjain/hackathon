const conciergeData = require('../utils').conciergeData;
const chromeless = require('../utils').chromeless;

module.exports = function (app) {
  // post call for concierge
  app.get('/giveMeJPG', (req, res) => {
    //  conciergeData.setData(req.body);
    //  render dashboard and get screenshot
    chromeless.getScreenshot().then(screenshot => {
      res.send(screenshot);
    });
    // console.log(req.body);
  });
};