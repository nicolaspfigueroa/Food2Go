
module.exports = (sequelize, DataTypes, Deferrable) => sequelize.define('UserPurchase', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
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
