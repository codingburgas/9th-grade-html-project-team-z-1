const uuid = require('uuid')
const {Firefighter} = require('..//models/models')
const ApiError = require('../errors/apiError')
const path = require('path')

class FirefighterController {
    async add(req, res, next) {
        try {
            const {firstName, lastName} = req.body
            const {image} = req.files
            const fileName = uuid.v4() + '.jpg'

            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const firefighter = await Firefighter.create({firstName, lastName, image: fileName})
            return res.json(firefighter)
        }
        catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
    
    async getAll(req, res, next) {
        try {
            
            let {limit, page} = req.query
            
            page = page || 1
            limit = limit || 10
            let offset = page * limit - limit
    
            let firefighters = await Firefighter.findAndCountAll({limit, offset})
            return res.json(firefighters)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
    
    async getOne(req, res, next) {
        try {
            const {id} = req.params
            console.log(id)
            const firefighter = await Firefighter.findOne({ where: {id} })
            return res.json(firefighter)

        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new FirefighterController()