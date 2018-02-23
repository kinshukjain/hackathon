// server.js
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

// setup express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // request can only have json data in body

const port = 8000; // hardcoding this for our app as it will be run from lambda

/**** All routes will be imported here *******/
require('./app/routes')(app);


app.listen(port, () => {
  console.log('We are live on ' + port);
});
