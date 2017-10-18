var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Favorite = require('../models/favorite');

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
//
// router.get('/', function (req, res, next) {
//   Favorite.find()
//     .populate('user')
//     .exec(function (err, favorites) {
//       if (err) {
//         return res.status(500).json({
//           title: 'An error occurred',
//           error: err
//         });
//       }
//       res.status(200).json({
//         message: 'Success',
//         obj: favorites
//       });
//     });
// });

router.post('/', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  // decoded.user._id
  User.findById(req.body.userId, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    var favorite = new Favorite({
      article: req.body.articleId,
      user: req.body.userId
    });
    favorite.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      user.favorites.push(result);
      user.save();
      res.status(201).json({
        message: 'Saved Favorite',
        obj: result
      });
    });
  });
});


router.delete('/:id', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  Favorite.findById(req.params.id, function (err, favorite) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!favorite) {
      return res.status(500).json({
        title: 'No Article Favorited Found!',
        error: {favorite: 'Favorite Article not found'}
      });
    }
    if (favorite.user != decoded.user._id) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: {favorite: 'Users do not match'}
      });
    }
    favorite.remove(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted Favorite',
        obj: result
      });
    });
  });
});

module.exports = router;