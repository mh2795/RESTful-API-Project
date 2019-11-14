const Player = require('../models/Player')
const playersData = require('./players')

Player.remove({})
Player.collection.insert(playersData)
  .then(players => {
    console.log(playersData)
  })
  .catch(err => {
    console.log(err)
  })