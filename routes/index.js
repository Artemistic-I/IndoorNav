var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IndoorNav' });
});

router.get('/nav', function(req, res, next) {
  res.render('nav', { title: 'IndoorNav' });
});

module.exports = router;
