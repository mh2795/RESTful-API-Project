const express = require('express')
const router = express()
const playerController = require('../controllers/player')

router.get('/', playerController.index)
router.get('/:Id', playerController.findById)
router.get('/team/:teamId', playerController.showTeam)
router.post('/', playerController.create)
router.put('/:Id', playerController.edit)
router.delete('/:Id', playerController.delete)

module.exports = router
