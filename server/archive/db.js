const {Sequelize} = require('sequelize'); 

const sequelize = new Sequelize('Food2Go', 'postgres', '7415963Qwe$', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize