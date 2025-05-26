const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const accidentRouter = require('./accidentRouter')
const fireEngineRouter = require('./fire_engineRouter')
const fireStationRouter = require('./fire_stationRouter')
const fireTeamRouter = require('./fire_teamRouter')
const firefighterRouter = require('./firefighterRouter')
const accidentTypeRouter = require('./accident_typeRouter')

router.use('/user', userRouter)
router.use('/accident', accidentRouter)
router.use('/fireengine', fireEngineRouter)
router.use('/firestation', fireStationRouter)
router.use('/fireteam', fireTeamRouter)
router.use('/firefighter', firefighterRouter)
router.use('/accidenttype', accidentTypeRouter)

module.exports = router