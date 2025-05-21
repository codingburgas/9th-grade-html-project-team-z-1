require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const router = require('./routes/index')
const cors = require('cors')

const App = express()

App.use(express.json())
App.use(cors())
App.use('/api', router)

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