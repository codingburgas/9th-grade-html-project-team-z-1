const Router = require('express')
const router = new Router()
const accidentController = require('../controllers/accidentController')

router.post('/', accidentController.create)
router.get('/', accidentController.getAll)
router.get('/:id', accidentController.getOne)

module.exports = router