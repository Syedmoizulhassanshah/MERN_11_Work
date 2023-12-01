const sequelize = require("../bin/dbConnection");
const Users = require("./definitions/users");
const Projects = require("./definitions/projects");
const Teams = require("./definitions/teams");
const Tasks = require("./definitions/tasks");

const models = { Users, Projects, Teams, Tasks }; // models mean tables
const db = {}; // created empty object

db.sequelize = sequelize; // idher database sath connection ho raha hai and database connection create.
sequelize.models = models; // iss line say connection k baad db mein tables update

module.exports = {
  db,
  models,
};
