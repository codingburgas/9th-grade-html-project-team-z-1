const Router = require('express')
const router = new Router()
const accidentTypeController = require('../controllers/accident_typeController')
const checkRole = require('../middlewares/checkRole')

router.post('/', checkRole('ADMIN'), accidentTypeController.create)
router.get('/', accidentTypeController.getAll)
router.delete('/', checkRole('ADMIN'), accidentTypeController.remove)

module.exports = router