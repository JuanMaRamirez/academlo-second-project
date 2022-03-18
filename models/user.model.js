const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/');

const User = sequelize.define('user', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  emaiil: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active'
  },
  role: {
    tyé: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'gest' | admin
  }
});

module.exports = { User };
