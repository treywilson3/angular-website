var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Article = require('../models/article');

router.get('/', function (req, res, next) {
  Article.find()
    .exec(function (err, articles) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: articles
      });
    });
});

router.get('/:id', function (req, res, next) {
  Article.findById(req.params.id, function (err, article) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: article
      });
    });
});

router.use('/', function (req, res, next) {
  jwt.verify(req.query.token, 'secret', function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  })
});

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
