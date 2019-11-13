const Player = require('../models/Player')

module.exports = {
  index: (req, res) => {
    Player.find({})
      .then(player => {
        res.json(player)
      })
  },
  showTeam: (req, res) => {
    Player.find({teamId: req.params.teamId})
      .then(player => {
        res.json(player)
      })
  },
  showLastName: (req, res) => {
    Player.find({lastName: req.params.lastName})
      .then(player => {
        res.json(player)
      })
  },
  create: (req, res) => {
    Player.create(req.body)
      .then(player => {
        res.json(player)
      })
  },
  edit: (req, res) => {
    Player.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true})
      .then(player => {
        res.json(player)
      })
  },
  delete: (req, res) => {
    Player.findOneAndDelete({_id: req.params.Id})
      .then(player => {
        res.json(player)
      })
  }
}
