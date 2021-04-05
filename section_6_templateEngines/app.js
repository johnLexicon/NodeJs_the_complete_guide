const express = require('express');
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'notFound.html'));
});

app.listen(9999);
