const Router = require('express')
const router = new Router()
const firefighterController = require('../controllers/firefighterController')

router.post('/', firefighterController.add)
router.get('/', firefighterController.getAll)
router.get('/:id', firefighterController.getOne)
router.delete('/', firefighterController.remove)
router.patch('/:id/assign-to-team', firefighterController.assignToTeam)

module.exports = router