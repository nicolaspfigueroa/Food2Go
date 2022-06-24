const {Sequelize} = require('sequelize'); 

const sequelize = new Sequelize('Food2Go', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize