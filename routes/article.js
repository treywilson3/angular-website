var express = require('express');
var router = express.Router();

var Article = require('../models/article');


router.post('/', function (req, res, next) {
  var article = new Article({
    author: req.body.author,
    title: req.body.title,
    body: req.body.body
  });
  article.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'Article created',
      obj: result
    });
  });
});

module.exports = router;
