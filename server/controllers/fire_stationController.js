const FireStation = require('../models/models')
const ApiError = require('../errors/apiError')

class fireStationController {
    async add(req, res, next) {
        try {
            const {name, address, latitude, longtitude} = req.body
            const fireStation = await FireStation.create({name, address, latitude, longtitude})

            return res.json(fireStation)

        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
    
    async getAll(req, res, next) {
        try {
            let {limit, page} = req.query
            

            limit = limit || 5
            page = page || 1
            let offset = page * limit - limit
            const fireStations = await FireStation.findAndCountAll({limit, offset})
            return res.json(fireStations)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
    
    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const fireStation = await Accident.findOne({
                where: {id}
            })
            return res.json(fireStation)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
}

module.exports = new fireStationController()