// lambda.js: entry point for AWS lambda

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server');
const server = awsServerlessExpress.createServer(app);

// the entry point for our app
module.exports.universal = (event, context) => awsServerlessExpress.proxy(server, event, context);