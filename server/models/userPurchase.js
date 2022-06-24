const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db');
const User = require('./user');


const UserPurchases = sequelize.define('UserPurchase', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: User,
          key: id,
          //deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    purchase: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
})

module.exports = UserPurchases