var mongoose = require('mongoose'); 
var Schema = mongoose.Schema
var md5 = require('js-md5');

var linkSchema = new Schema({
  url: String,
  key: String
});

linkSchema.statics.saveURL = function(str, cb) {
  var _model = this;
  var hex = md5(str);  
  _model.find({key: hex}, function(err, link) {
    if(err) throw err;
    if(!link.length) {
      results = {url: str, key: hex}
      _model.create(results, function(err, link) {
        if(err) throw err;
        cb(link)
      });
    } else { cb(link[0]); }
  });
}


module.exports = linkSchema;
