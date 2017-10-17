var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');
var Article = require('./article');

var schema = new Schema({
  article: {type: Schema.Types.ObjectId, ref: 'Article'},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// may need to update
// this does removing of article favorited in user array of favorites
schema.post('remove', function (article) {
  User.findById(article.user, function (err, user) {
    user.articles.pull(article);
    user.save();
  });
});

module.exports = mongoose.model('Favorite', schema);