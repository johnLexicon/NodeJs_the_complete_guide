const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('add-product', { docTitle: 'Admin', activate: 'admin' });
});

router.post('/add-product', (req, res) => {
  const product = { title: req.body.title, content: req.body.content };
  const products = req.app.get('products');
  products.push(product);
  req.app.set('products', products);
  res.redirect('/shop');
});

module.exports = router;
