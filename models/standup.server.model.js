var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    Name: String,
    YesterdayTasks:  String,
    TodayTasks:  String,
    EntryDate:  { type:  Date, default:  Date.now }
});

module.exports = mongoose.model('Standup', standupSchema);
