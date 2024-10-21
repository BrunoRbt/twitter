const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('twitter_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };

// Importar e conectar ao banco de dados
const { connectDB } = require('./models/index');

connectDB();
