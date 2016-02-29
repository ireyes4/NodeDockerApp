var Standup = require('../models/standup.server.model.js');

exports.create = function(req, res){
    var entry = new Standup(
    {
        Name: req.body.name,
        YesterdayTasks:  req.body.YesterdayTasks,
        TodayTasks:  req.body.TodayTasks,
    });
    
    entry.save();
    res.redirect(301, '/');
};

exports.getNote = function(req, res)
{
    res.render('index', {title: 'Standup Notes'});
}