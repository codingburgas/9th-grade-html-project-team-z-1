const Router = require('express')
const router = new Router()
const fireTeamController = require('../controllers/fire_teamController')

router.post('/', fireTeamController.add)
router.get('/', fireTeamController.getAll)
router.get('/:id', fireTeamController.getOne)
router.delete('/', fireTeamController.remove)
router.patch('/:id/assign-to-station', fireTeamController.changeFireStation)
router.patch('/:id/assign-accident', fireTeamController.assignAccident)

module.exports = router