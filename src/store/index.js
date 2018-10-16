const Sequelize = require('sequelize')
const config = require('../config/')

var sequelize = new Sequelize(config.database, config.user, config.pass, {
  host: config.host,
  dialect: 'mysql'

  pool: {
    max: 5,
    min: 0,
    acquire: 10000,
    idle: 10000
  },
});

module.exports{
  Sequelize,
  sequelize
}
