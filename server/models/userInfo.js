const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db');


const UserInfo = sequelize.define('UserInfo', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favorites: [
      {type: DataTypes.STRING}
    ],
    purchases: [
      {type: DataTypes.STRING}
    ]
})

module.exports = UserInfo