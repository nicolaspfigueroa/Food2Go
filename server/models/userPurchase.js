// const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = require('../db');
//const User = require('./user');


module.exports = (sequelize, DataTypes, Deferrable) => sequelize.define('UserPurchase', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
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
});

// module.exports = UserPurchases