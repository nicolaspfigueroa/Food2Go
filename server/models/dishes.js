module.exports = (sequelize, DataTypes) => sequelize.define('Dishes', {
  restaurantId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Restaurants",
        key: "id",
        //deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
},
{timestamps: false}
);