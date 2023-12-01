const { Model, DataTypes } = require("sequelize"); // destructuring
const sequelize = require("../../bin/dbConnection"); //sequelize database represent
const Projects = require("./projects");
const Users = require("./users");

class Tasks extends Model {}

Tasks.init(
  {
    taskId: {
      primaryKey: true,
      type: DataTypes.INTEGER(60),
    },
    taskName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    taskDescription: {
      type: DataTypes.STRING(255),
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER(60),
      references: {
        model: Users,
        key: "userId",
      },
    },
    projectId: {
      type: DataTypes.INTEGER(60),
      references: {
        model: Projects,
        key: "projectId",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "tasks",
  }
);

module.exports = Tasks;
