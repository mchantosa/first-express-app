const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/account', (request, response) => {
  response.render('account', { money: '$100', recentTransactions: true });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
