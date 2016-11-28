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

app.get('/new/:url', function(req, res) {
  var str = req.params.url;
  var urlOrMD5 = urlOrHex(str);
  if(urlOrMD5 === 'url') {
    Link.saveURL(str, function(doc) {
      var resJSON = {url: doc.url, short_url: doc.key}
      res.json(resJSON);
    });
  } else res.sendStatus(404).send("Invalid URL")
});

app.get('/:md', function(req, res) {
  var _key = req.params.md
  if(urlOrHex(_key) === 'md5') {
    Link.find({key: _key}, function(err, doc) {
      if(err) throw err;
      console.log(doc[0].url, "DOCCC");
      res.redirect(doc[0].url);
    });
  } else { res.sendStatus(404) }
});



module.exports = app;
