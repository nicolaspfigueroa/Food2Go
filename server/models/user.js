// const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = require('../db');
'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('User', {
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

// const User = sequelize.define('User', {

// })

// module.exports = User