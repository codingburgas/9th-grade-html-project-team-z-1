const {Accident, AccidentType} = require('../models/models')
const Apierror = require('../errors/apiError')
const { Op } = require('sequelize')

class accidentController {
    async create(req, res, next) {
        try {
            const {name, address, latitude, longtitude, description, date, time, typeId} = req.body

            const accident = await Accident.create({name, address, latitude, longtitude, description, date, time, typeId})
            return res.json(accident)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
    
    async getAll(req, res, next) {
        try {
            let {startDate, endDate, type, limit, page} = req.query
            
            limit = limit || 5
            page = page || 1
            let offset = page * limit - limit

            let whereClause = {}
            if (startDate && endDate) {
                whereClause.date = {
                    [Op.between]: [new Date(startDate), new Date(endDate)]
                }
            }

            if (type) {
                whereClause.typeId = type
            }

            const accidents = await Accident.findAndCountAll({where: whereClause, limit, offset})
            return res.json(accidents)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
    
    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const accident = await Accident.findOne({where: {id}})
            const typeId = accident.typeId
            const type = await AccidentType.findOne({where: typeId})

            return res.json({accident, type})
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }

    async remove(req, res) {
        const {id} = req.body
        const deleteCount = Accident.destroy({where: {id}})

        if (deleteCount) res.json({message: 'Success'})
        else res.json({message: 'Failure'})
    }

    async changeState(req, res, next) {
        const accidentId = req.params.id
        const {state} = req.body

        try {
            const accident = Accident.findByPk(accidentId)
            
            if (!accident) return res.status(404).json({message: 'Accident not found!'})
            accident.state = state
            await accident.save()

            return res.json(accident)
        } catch (err) {
            next(Apierror.badRequest.err.message)
        }
    }
}

module.exports = new accidentController()