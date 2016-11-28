var express = require('express');
var app = express();
var mongoose = require('mongoose');
var schema = require('./link.js');
var urlOrHex = require('./helpers/urlOrHex.js');

// this code prevents the model from compliling twice which
// was causing errors
var Link 
try {
  Link = mongoose.model("Link");
} catch(error) {
  Link = mongoose.model("Link", schema);
}

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendStatus(200);
});

app.get('/:url', function(req, res) {
      
});



module.exports = app;
