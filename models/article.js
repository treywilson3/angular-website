var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  author: {type: String, required: true},
  title: {type: String, required: true},
  body: {type: String, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Article', schema);