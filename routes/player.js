const express = require('express')
const router = express()
const playerController = require('../controllers/player')

router.get('/', playerController.index)
router.get('/id/:_id', playerController.findById)
router.get('/team/:teamId', playerController.showTeam)
router.get('/:lastName', playerController.showLastName)
router.post('/', playerController.create)
router.put('/:Id', playerController.edit)
router.delete('/:Id', playerController.delete)

module.exports = router
