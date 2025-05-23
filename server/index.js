require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const router = require('./routes/index')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')

const App = express()

App.use(express.json())
App.use(cors())
App.use(fileUpload({}))
App.use(express.static(path.resolve(__dirname, 'static')))
App.use('/api', router)

// The error handler must always be registered last
App.use(errorHandler)

App.get('/', (req, res) => {
    res.status(200).json({message: "All working"})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        App.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`))
    }
    catch (err) {
        console.log(err)
    }
}

start()