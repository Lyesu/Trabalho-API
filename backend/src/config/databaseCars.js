const { Sequelize } = require("sequelize");

const database = "api";
const username = "root";
const password = "1q2w3e4r5t";

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "mariadb",
});

const models = [require("../models/Cars")].map((m) => m(sequelize));

sequelize.sync().then("Banco de dados sincronizado!");

module.exports = sequelize;
