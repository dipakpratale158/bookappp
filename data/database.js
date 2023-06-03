const Sequelize = require("sequelize");
const sequelize = new Sequelize("bookingappointment", "root", "Dipak@12345", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
