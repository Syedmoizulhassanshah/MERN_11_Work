const { Model, DataTypes } = require("sequelize"); // destructuring
const sequelize = require("../../bin/dbConnection"); //sequelize database represent

class Roles extends Model {}

Roles.init(
  // passing two objects here one object is columns name and the other objects is options fr db
  {
    roleId: {
      primaryKey: true,
      type: DataTypes.STRING(60),
    },
    role: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize, // when no key then same value and key i.e. sequelize:sequelize ;
    timestamps: true,
    paranoid: true,
    modelName: "roles",
  }
);

module.exports = Roles;
