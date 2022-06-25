module.exports = (sequelize, DataTypes) => sequelize.define('Restaurants', {
  name: {
    type: DataTypes.STRING
  },
  lat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  long: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: true
  }
});