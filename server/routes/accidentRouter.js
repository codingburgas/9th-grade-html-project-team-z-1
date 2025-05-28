const Router = require('express')
const router = new Router()
const accidentController = require('../controllers/accidentController')

router.post('/', accidentController.create)
router.get('/', accidentController.getAll)
router.get('/:id', accidentController.getOne)
router.delete('/', accidentController.remove)
router.patch('/:id/set-state', accidentController.changeState)

module.exports = router