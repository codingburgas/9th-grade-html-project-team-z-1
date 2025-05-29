const Router = require('express')
const router = new Router()
const fireStationController = require('../controllers/fire_stationController')
const checkRole = require('../middlewares/checkRole')

router.post('/', checkRole('ADMIN'), fireStationController.add)
router.get('/', fireStationController.getAll)
router.get('/:id', fireStationController.getOne)
router.delete('/', checkRole('ADMIN'), fireStationController.remove)

module.exports = router