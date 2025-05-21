class fireTeamController {
    async add(req, res, next) {
        return res.json({message: 'Create'})
    }
    
    async getAll(req, res, next) {
        return res.json({message: 'getAll'})
    }
    
    async getOne(req, res, next) {
        return res.json({message: 'getOne'})
    }
}

module.exports = new fireTeamController()