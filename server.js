// server.js: to run our app on aws lambda
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

// setup express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // request can only have json data in body

/**** All routes will be imported here *******/
require('./app/routes')(app);

module.exports = app;
