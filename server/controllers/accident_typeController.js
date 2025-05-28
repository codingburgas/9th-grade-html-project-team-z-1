const ApiError = require('../errors/apiError')
const {AccidentType} = require('../models/models')

class AccidentController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            const accidentType = await AccidentType.create({name: name})
            return res.json(accidentType)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res, next) {
        let {limit, page} = req.query

        limit = limit || 5
        page = page || 1
        let offset = page * limit - limit

        try {
            const accidentTypes = await AccidentType.findAll({limit, offset})
            return res.json(accidentTypes)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async remove(req, res) {
        try {
            const {id} = req.body
            
            const deleteCounter = await AccidentType.destroy({where: {id}})

            if (deleteCounter) res.json({message: "Success"})
            else res.json({message: "Filure"})
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new AccidentController()