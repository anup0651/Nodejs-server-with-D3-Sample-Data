var http = require('http');
var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var routes = require('./routes');
var cores = require('./cores');
var port = 5020;


app.use('/*', cores);
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api', routes);


http.createServer(app).listen(port, function () {
  console.log('Running on port' + port);
});
