module.exports = (sequelize, DataTypes) => sequelize.define('Dishes', {
  restaurantId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Restaurants",
        key: "id",
      }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{timestamps: false}
);