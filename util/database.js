const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  port: 5432,
  database: 'project_app',
  dialect: 'postgres',
  loggin:false
});

module.exports = { sequelize };
