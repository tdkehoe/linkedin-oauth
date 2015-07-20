var express = require('express');
var router = express.Router();
var cookieSession = require('cookie-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    user: req.user
  });
});

module.exports = router;
