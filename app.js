var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendStatus(200);
});

app.get('/:url', function(req, res) {
});



module.exports = app;
