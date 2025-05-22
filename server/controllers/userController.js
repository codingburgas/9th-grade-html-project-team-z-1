const {User} = require('../models/models')
const apiError = require('../errors/apiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateJsonWebToken = (id, firstName, lastName, email, role) => {
    return jwt.sign(
        {id: id, firstName: firstName, lastName: lastName, email: email, role: role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

// Contains methods for every route
class UserController {
    async registration(req, res, next) {
        const {firstName, lastName, email, password, role} = req.body
        
        if (!email || !password)
            next(apiError.badRequest('Invalid email or password.'))

        const candidate = await User.findOne({where: {email}})
1
        if (candidate)
            next(apiError.badRequest('Email already used.'))

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({firstName, lastName, email, role, password: hashPassword})
        const token = generateJsonWebToken(user.id, user.firstName, user.lastName, user.email, user.role)

        return res.json(token)
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (!user) 
            next(apiError.badRequest('User not found.'))
        
        if (!bcrypt.compareSync(password, user.password))
            next(apiError.badRequest('Incorrect password.'))

        const token = generateJsonWebToken(user.id, user.firstName, user.lastName, user.email, user.role)
        return res.json(token)
    }

    async check(req, res, next) {
        const {id, firstName, lastName, email, role} = req.body
        const token = generateJsonWebToken(id, firstName, lastName, email, role)
        res.json(token)
    }
}

module.exports = new UserController()