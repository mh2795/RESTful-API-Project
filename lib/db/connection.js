const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nba_players', { useNewUrlParser: true });
module.exports = mongoose;