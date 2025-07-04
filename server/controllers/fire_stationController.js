const { FireStation } = require('../models/models')
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
            let offset
            let fireStations
            if (limit && page) {
                limit = limit || 5
                page = page || 1
                offset = page * limit - limit
                fireStations = await FireStation.findAndCountAll({limit, offset})
            }
            else fireStations = await FireStation.findAndCountAll()
            return res.json(fireStations)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
    
    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const fireStation = await FireStation.findOne({
                where: {id}
            })
            return res.json(fireStation)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async remove(req, res) {
        const {id} = req.body
        const deleteCount = FireStation.destroy({where: {id}})

        if (deleteCount) return res.json({message: "Success"})
        else return res.json({message: "Failure"})
    }
}

module.exports = new fireStationController()