var express = require('express');
var router = express.Router();
var WatchlistRouter = require('../controllers/watchlist.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Watchlists' });
});

router.get('/watchlist/:name', function(req, res, next) {
  return WatchlistRouter.getWatchlist(req.name, res);
});

router.get('/watchlist', function(req, res, next) {
  return WatchlistRouter.getWatchlists(req, res);
});

router.post('/watchlist', function(req, res, next) {
  return WatchlistRouter.create(req, res);
});



module.exports = router;
