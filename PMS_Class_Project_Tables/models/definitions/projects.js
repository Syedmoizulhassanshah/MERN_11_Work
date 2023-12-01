const { Model, DataTypes } = require("sequelize"); // destructuring
const sequelize = require("../../bin/dbConnection"); //sequelize database represent
const Users = require("./users");

class Projects extends Model {}

Projects.init(
  {
    projectId: {
      type: DataTypes.INTEGER(60),
      primaryKey: true,
      allowNull: false,
    },
    projectName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    projectDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    managerId: {
      type: DataTypes.INTEGER(60),
      references: { model: Users, key: "userId" },
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "projects",
  }
);

module.exports = Projects;
