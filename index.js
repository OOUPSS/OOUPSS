const express = require('express'); // Подключение express
const quotes = require('./quotes.json'); // Импорт quotes.json

const app = express(); // Инициализация приложения

// Определение маршрута /api
app.get('/api', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

const port = 3000; // Укажите порт
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
