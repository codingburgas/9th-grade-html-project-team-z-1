const ApiError = require('../errors/apiError')
const {FireTeam, Firefighter} = require('../models/models')

class fireTeamController {
    async add(req, res, next) {
        try {
            const {name, firefighterIds} = req.body
            const fireTeam = await FireTeam.create({name})

            if (firefighterIds && firefighterIds.length > 0)
                await fireTeam.addFireFighters(firefighterIds)

            const createdFireTeam = await FireTeam.findByPk(fireTeam.id, {
                include: Firefighter
            })

            return res.json(createdFireTeam)
                
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
    
    async getAll(req, res, next) {
        let {limit, page} = req.query
        limit = limit || 5
        page = page || 1

        try {
            const fireTeams = await FireTeam.findAll({
                include: [Firefighter]
            })
    
            return res.json(fireTeams)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
    
    async getOne(req, res, next) {
        const {id} = req.params
        try {
            const fireTeam = await FireTeam.findOne({id,
                include: Firefighter
            })
            return res.json(fireTeam)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async remove(req, res) {
        const {id} = req.body
        const deleteCount = FireTeam.destroy({where: {id}})

        if (deleteCount) return res.json({message: "Success"})
        else return res.json({message: "Failure"})
    }

    async changeFireStation(req, res, next) {
        const fireTeamId = req.params.id
        const {fireStationId} = req.body

        try {
            const team = await FireTeam.findByPk(fireTeamId, {
                include: Firefighter
            })
            
            team.fireStationId = fireStationId
            await team.save()

            return res.json(team)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new fireTeamController()