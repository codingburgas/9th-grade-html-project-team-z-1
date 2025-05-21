const Router = require('express')
const router = new Router()
const firefighterController = require('../controllers/firefighterController')

router.post('/', firefighterController.add)
router.get('/', firefighterController.getAll)
router.get('/:id', firefighterController.getOne)

module.exports = router