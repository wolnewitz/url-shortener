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
  var str = req.params.url;
  var urlOrMD5 = urlOrHex(str);
  if(urlOrMD5 === 'url') {
    Link.saveURL(str, function(doc) {
      var resJSON = {url: doc.url, short_url: doc.key}
      res.json(resJSON);
    });
  } else if(urlOrMD5 === 'md5') {
    Link.find({key: str}, function(err, doc) {
      if(err) throw err;
      res.redirect(301, doc.url);
    });
  } else if(urlOrMD5 === undefined) {
    res.sendStatus(404).send("Sorry not a valid URL");
  }
});



module.exports = app;
