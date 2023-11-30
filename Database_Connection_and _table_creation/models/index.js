const sequelize = require("../bin/dbConnection");
const Users = require("./definitions/users");
const Roles = require("./definitions/roles");

const models = { Users, Roles };
const db = {}; // created empty object

db.sequelize = sequelize; // idher database sath connection ho raha hai and database connection create.
sequelize.models = models; // iss line say connection k baad db mein tables update

module.exports = {
  db,
  models,
};
