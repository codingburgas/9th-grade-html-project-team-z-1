class UserController {
    async registration(req, res, next) {
        return res.json({message: 'registration'})
    }

    async login(req, res, next) {
        return res.json({message: 'login'})
    }

    async check(req, res, next) {
        return res.json({message: 'auth'})
    }
}

module.exports = new UserController()