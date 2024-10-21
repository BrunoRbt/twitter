const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Tweet = sequelize.define('Tweet', {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Tweet;
