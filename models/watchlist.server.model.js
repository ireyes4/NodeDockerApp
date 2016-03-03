var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var watchlistSchema = new Schema({
    Name: String,
    Symbols:  Array,
    investorID:  Number,
    EntryDate:  { type:  Date, default:  Date.now }
});

module.exports = mongoose.model('Watchlist', watchlistSchema);
