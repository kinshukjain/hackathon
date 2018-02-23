// local.js: to run node locally
const app = require('./server.js');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});
