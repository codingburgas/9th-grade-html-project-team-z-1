const Router = require('express')
const router = new Router()
const fireEngineController = require('../controllers/fire_engineController')
const checkRole = require('../middlewares/checkRole')

router.post('/', checkRole('ADMIN'), fireEngineController.add)
router.get('/', fireEngineController.getAll)
router.get('/:id', fireEngineController.getOne)
router.delete('/', checkRole('ADMIN'), fireEngineController.remove)
router.patch('/:id/assign-team', fireEngineController.assignTeam)

module.exports = router