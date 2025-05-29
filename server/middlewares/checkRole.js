const jwt = require('jsonwebtoken')

// The role argument is used to tell which role the user has to have for a certain action
module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS")
            next()

        try {

            const token = req.headers.authorization.split(' ')[1]

            // if jsonwebtoken is not found then the user is not authenticated
            if (!token)
                return res.status(401).json({message: 'Not authenticated.'})

            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            // if the user role isn't the role that was expected, then the user's access is denied
            if (decoded.role !== role)
                return res.status(403).json({message: 'Access denied'})
                
            req.user = decoded
            next()
        } catch (err) {
            res.status(401).json({message: 'Not authenticated.'})
        }
    }
}