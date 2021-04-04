const express = require('express');
const app = express();

app.use('/users', (req, res) => {
  res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('First');
  res.send('<h1>Welcome Home</h1>');
  next();
});

app.use((req, res, next) => {
  console.log('Second');
});

app.listen(9999);
