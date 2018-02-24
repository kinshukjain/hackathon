const conciergeData = require('../utils').conciergeData;
const chromeless = require('../utils').chromeless;

module.exports = function (app) {
  // post call for concierge
  app.get('/give-me-jpg', (req, res) => {
    //  conciergeData.setData(req.body);
    //  render dashboard and get screenshot
    chromeless.getScreenshot()
    .then(screenshot => {
      res.status(200).send(screenshot);
    })
    .catch(err => {
      res.status(400).send(err);
    });
    // console.log(req.body);
  });
};