var mongoose = require('mongoose'); 
var Schema = mongoose.Schema
var urlOrHex = require('./helpers/urlOrHex')
var md5 = require('js-md5');

var linkSchema = new Schema({
  url: String,
  key: String
});

linkSchema.statics.saveURL = function(str) {
  var urlOrMD5 = urlOrHex(str);
  var _model = this;
  if(urlOrMD5 === "url") {
    var hex = md5(str);  
    _model.find({key: hex}, function(err, link) {
      if(err) throw err;
      if(!link.length) {
        results = {url: str, key: hex}
        _model.create(results, function(err, link) {
          if(err) throw err;
        });
      } else {
         jsonResult = 'something else';  
      } 
    });
  }
}


module.exports = linkSchema;
