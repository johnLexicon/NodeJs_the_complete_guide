const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('shop', {
    docTitle: 'My shop',
    activate: 'shop',
    products: req.app.get('products'),
  });
});

module.exports = router;
