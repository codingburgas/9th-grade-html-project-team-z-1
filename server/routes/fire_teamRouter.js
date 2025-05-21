const Router = require('express')
const router = new Router()
const fireTeamController = require('../controllers/fire_teamController')

router.post('/', fireTeamController.add)
router.get('/', fireTeamController.getAll)
router.get('/:id', fireTeamController.getOne)

module.exports = router