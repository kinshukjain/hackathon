const conciergeData = require('../constants').conciergeData;

module.exports = function(app) {
    app.get('/authentication', (req, res) => {
//       console.log(conciergeData.getDataAuth());
       res.send(conciergeData.getDataAuth());
    });

    app.get('/getDashboard', (req, res) => {
//       console.log(conciergeData.getDataDashboard());
       res.send(conciergeData.getDataDashboard());
    });

    app.get('/getPanel', (req, res) => {
//       console.log(conciergeData.getDataPanel());
       res.send(conciergeData.getDataPanel());
    });

    app.get('/getChartData', (req, res) => {
//       console.log(conciergeData.getDataChart());
       res.send(conciergeData.getDataChart());
    });
};
