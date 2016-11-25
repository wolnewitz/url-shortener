var express = require('express');
var app = express();
var mongoClient = require('mongodb').MongoClient;

var db;

mongoClient.connect('mongodb://localhost:27017/shortener-dev', function(err, database) {
  if(err) console.log("error: " + err);
  db = database;
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendStatus(200);	
});

app.get('/:url', function(req, res) {
  db.collection('url').save({url: req.params.url, key: 1234}, function(err, result) {
    if(err) console.log("error: " + err);
    console.log('result', result);
    res.json(result);
  });	
  
});


module.exports = app;
