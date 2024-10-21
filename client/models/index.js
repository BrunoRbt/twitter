const express = require('express');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

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

const User = require('./models/user');
const Tweet = require('./models/tweet');

// Definindo os relacionamentos
User.hasMany(Tweet, { foreignKey: 'userId' });
Tweet.belongsTo(User, { foreignKey: 'userId' });

// Sincronizando o banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

// Adicionando suporte ao JSON para as requisições
app.use(express.json());

// Rota de registro de usuário
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Rota de login de usuário
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Rota para obter os tweets das pessoas que o usuário segue
app.get('/feed', async (req, res) => {
  try {
    const tweets = await Tweet.findAll({
      include: User,
      order: [['createdAt', 'DESC']]
    });
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching feed' });
  }
});

// Rota para postar um novo tweet
app.post('/tweet', async (req, res) => {
  const { content, userId } = req.body;
  try {
    const tweet = await Tweet.create({ content, userId });
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).json({ error: 'Error posting tweet' });
  }
});

// Adicionar uma rota de teste
app.get('/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send('Connection has been established successfully.');
  } catch (error) {
    res.status(500).send('Unable to connect to the database: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { sequelize, connectDB, User, Tweet };
