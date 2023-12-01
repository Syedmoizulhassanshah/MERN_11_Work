const { Model, DataTypes } = require("sequelize"); // destructuring
const sequelize = require("../../bin/dbConnection"); //sequelize database represent
const Users = require("./users");

class Teams extends Model {}

Teams.init(
  {
    teamId: {
      primaryKey: true,
      type: DataTypes.INTEGER(60),
    },
    teamName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    teamDescription: {
      type: DataTypes.STRING(255),
    },
    managerId: {
      type: DataTypes.INTEGER(60),
      references: {
        model: Users,
        key: "userId",
      },
    },
    projectIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER(60)),
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "teams",
  }
);

module.exports = Teams;
