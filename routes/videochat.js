var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('videochat/index', { title: 'Video Chat View' });
});

module.exports = router;
