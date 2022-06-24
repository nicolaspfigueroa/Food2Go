// const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = require('../db');
'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};


// const User = sequelize.define('User', {

// })

// module.exports = User