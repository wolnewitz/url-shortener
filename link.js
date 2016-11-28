var mongoose = require('mongoose'); 
var Schema = mongoose.Schema

var linkSchema = new Schema({
  url: String,
  key: String
});


exports.schema = linkSchema;
