const {Accident, AccidentType} = require('../models/models')
const Apierror = require('../errors/apiError')

class accidentController {
    async create(req, res, next) {
        try {
            const {name, address, latitude, longtitude, description, date, time} = req.body
            
            const accident = await Accident.create({name, address, latitude, longtitude, description, date, time})
            return res.json(accident)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
    
    async getAll(req, res, next) {
        try {
            let {limit, page} = req.query
            
            limit = limit || 5
            page = page || 1
            let offset = page * limit - limit
            const accidents = await Accident.findAndCountAll({limit, offset})
            return res.json(accidents)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
    
    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const accident = await Accident.findOne({
                where: {id},
                include: [{model: AccidentType, as: 'type'}]
            })
            return res.json(accident)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
}

module.exports = new accidentController()