const Router = require('express')
const router = new Router()
const fireStationController = require('../controllers/fire_stationController')

router.post('/', fireStationController.add)
router.get('/', fireStationController.getAll)
router.get('/:id', fireStationController.getOne)
router.delete('/', fireStationController.remove)

module.exports = router