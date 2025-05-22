const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS')
        next()

    try {

        // In the authorization header the token type and the token itself are separated by space so we split them
        // and take only the token
        const token = req.headers.authorization.split(' ')[1]
        if (!token)
            return res.status(401).json({message: 'Not authenticated'})
    
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({message: 'Not authenticated'})
    }

}