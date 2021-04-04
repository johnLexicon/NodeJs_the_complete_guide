const express = require('express');
const app = express();
const path = require('path');

const router = require('./routes/users.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', router);

app.listen(9999);
