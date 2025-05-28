const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Accident = sequelize.define('accident', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    latitude: {type: DataTypes.DECIMAL, allowNull: false},
    longtitude: {type: DataTypes.DECIMAL, allowNull: false},
    description: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE, allowNull: false},
    time: {type: DataTypes.TIME, allowNull: false},
    state: {type: DataTypes.STRING, defaultValue: 'In Progress'}
})

const AccidentType = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Firefighter = sequelize.define('firefighter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    state: {type: DataTypes.STRING, defaultValue: 'Free', allowNull: false},
    image: {type: DataTypes.STRING},
})

const FireTeam = sequelize.define('fire_team', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const FireStation = sequelize.define('fire_station', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    latitude: {type: DataTypes.DECIMAL, allowNull: false},
    longtitude: {type: DataTypes.DECIMAL, allowNull: false},
})

const FireEngine = sequelize.define('fire_engine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    state: {type: DataTypes.STRING, defaultValue: 'Free'},
    description: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING}
})

AccidentType.hasOne(Accident)
Accident.belongsTo(AccidentType)

Accident.hasOne(FireTeam)
FireTeam.belongsTo(Accident)

Accident.hasOne(FireEngine)
FireEngine.belongsTo(Accident)

FireTeam.hasMany(Firefighter)
Firefighter.belongsTo(FireTeam)

FireStation.hasMany(FireTeam)
FireTeam.belongsTo(FireStation)

module.exports = {
    User,
    Accident,
    AccidentType,
    Firefighter,
    FireTeam,
    FireStation,
    FireEngine
}