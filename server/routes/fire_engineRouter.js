const Router = require('express')
const router = new Router()
const fireEngineController = require('../controllers/fire_engineController')

router.post('/', fireEngineController.add)
router.get('/', fireEngineController.getAll)
router.get('/:id', fireEngineController.getOne)
router.delete('/', fireEngineController.remove)
router.patch('/:id/assign-accident', fireEngineController.assignAccident)

module.exports = router