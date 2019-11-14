const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Player = new Schema({
    firstName: String,
    lastName: String,
    teamId: String,
    jersey: String,
    pos: String,
    heightFeet: String,
    heightInches: String,
    weightPounds: String,
    dateOfBirthUTC: String,
    draft: {
      teamId: String,
      pickNum: String,
      roundNum: String,
      seasonYear: String
    },
    nbaDebutYear: String,
    yearsPro: String,
    collegeName: String,
    country: String
})

module.exports = mongoose.model('Player', Player)
