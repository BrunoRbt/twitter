const express = require('express');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('twitter_db', 'postgres', '369258bn', {
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

// Chamar a função connectDB quando o servidor iniciar
connectDB();

// Servir os arquivos estáticos do build do React
app.use(express.static(path.join(__dirname, 'client/build')));

// Rota para qualquer requisição que não tenha sido capturada pelos outros endpoints
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
