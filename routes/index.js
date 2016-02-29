var express = require('express');
var router = express.Router();
var StandupRouter = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/newnote', function(req, res, next) {
  return StandupRouter.getNote(req, res);
});


router.post('/newnote', function(req, res, next) {
  return StandupRouter.create(req, res);
});



module.exports = router;
