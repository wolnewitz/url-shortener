var mongoose = require('mongoose'); 
var Schema = mongoose.Schema
var urlOrHex = require('./helpers/urlOrHex')

var linkSchema = new Schema({
  url: String,
  key: String
});

linkSchema.statics.getHexJSON = function(strOrHex) {
  return true;
}


exports.schema = linkSchema;
