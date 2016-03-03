var Watchlist = require('../models/watchlist.server.model.js');

exports.create = function(req, res){
    var entry = new Watchlist(
    {
        Name: req.body.Name,
        Symbols:  req.body.Symbols,
        investorID:  req.body.investorID,
    });
    
    entry.save();
    res.json({message:  "Created!"});
};

exports.getWatchlists = function(req, res)
{
    Watchlist.find(function(err, watchlists){
       if (err){
          res.send(err);
       } 
       res.json(watchlists);
    });
}

exports.getWatchlist = function(name, res)
{
    Watchlist.findOne({"Name":  name}, function(err, watchlist){
       if (err){
          res.send(err);
       } 
       res.json(watchlist);
    });
}