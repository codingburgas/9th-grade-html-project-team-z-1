const apiErr = require('../errors/apiError')

// This middleware is intended to handle errors that are not handled by ApiError.js by responding with status 500
module.exports = function(err, req, res, next) {
    if (err instanceof apiErr)
        return res.status(err.status).json({message: err.message})
    else
        return res.status(500).json({message: "An unexpected error occured"})
}