const { Model, DataTypes } = require("sequelize"); // destructuring
const sequelize = require("../../bin/dbConnection"); //sequelize database represent

class Users extends Model {}

Users.init(
  // passing two objects here one object is columns name and the other objects is options fr db
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(60),
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(60),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    sequelize, // when no key then same value and key i.e. sequelize:sequelize ;
    timestamps: true,
    paranoid: true,
    modelName: "users",
  }
);

module.exports = Users;
