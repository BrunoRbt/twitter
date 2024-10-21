const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
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

const User = require('./user');
const Tweet = require('./tweet');

// Definindo os relacionamentos
User.hasMany(Tweet, { foreignKey: 'userId' });
Tweet.belongsTo(User, { foreignKey: 'userId' });

// Sincronizando o banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { sequelize, connectDB, User, Tweet };
