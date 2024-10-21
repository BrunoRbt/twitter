const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir os arquivos estáticos do build do React
app.use(express.static(path.join(__dirname, 'client/build')));

// Rota para qualquer requisição que não tenha sido capturada pelos outros endpoints
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
