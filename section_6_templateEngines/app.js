const express = require('express');
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.set('products', [
  { title: 'Product 1', content: 'Some text 1' },
  { title: 'Product 2', content: 'Some text 2' },
  { title: 'Product 3', content: 'Some text 3' },
]);

//Template engine settings

// app.set('view engine', 'pug'); // Using Pug
app.set('view engine', 'ejs'); // Using EJS
app.set('views', 'views'); // This is the default path (not really needed unless you use other path for the templates)

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/', (req, res) => {
  res.render('not-found', { docTitle: 'Not Found' });
});

app.listen(9999);
