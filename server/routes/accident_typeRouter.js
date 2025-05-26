const Router = require('express')
const router = new Router()
const accidentTypeController = require('../controllers/accident_typeController')

router.post('/', accidentTypeController.create)
router.get('/', accidentTypeController.getAll)
router.delete('/', accidentTypeController.remove)

module.exports = router