const ApiError = require('../errors/apiError')
const {FireEngine} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const { IncomingMessage } = require('http')

class fireEngineController {
    async add(req, res, next) {
        try {
            const {description, name} = req.body
            const {image} = req.files
            
            const fileName = uuid.v4() + '.jpg'
            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const fireEngine = await FireEngine.create({description, name, image: fileName})
            return res.json(fireEngine)
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
            const fireEngines = await FireEngine.findAndCountAll({limit, offset})
            return res.json(fireEngines)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }
    
    async getOne(req, res, next) {
         try {
            const {id} = req.params
            const fireEngine = await FireEngine.findOne({
                where: {id}
            })
            return res.json(fireEngine)
        } catch (err) {
            next(Apierror.badRequest(err.message))
        }
    }

    async remove(req, res) {
        const {id} = req.body

        let deleteCount = FireEngine.destroy({id})
        if (deleteCount) return res.json({})
        else return res.json({})
    }

    async assignAccident(req, res, next) {
        const fireEngineId = req.params.id
        const {accidentId} = req.body

        try {
             const fireEngine = FireEngine.findByPk(fireEngineId)
             fireEngine.accidentId = accidentId
             return res.json(fireEngine)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
    async assignTeam(req, res, next) {
        const fireEngineId = req.params.id
        const {teamId} = req.body

        try {
             const fireEngine = FireEngine.findByPk(fireEngineId)
             fireEngine.fireTeamId = teamId
             return res.json(fireEngine)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new fireEngineController()