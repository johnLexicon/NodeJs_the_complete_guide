const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('addUser');
});

router.get('/all', (req, res) => {
  res.render('users', { users: req.app.get('users') });
});

router.post('/add-user', (req, res) => {
  const users = req.app.get('users');
  const username = req.body.username;
  users.unshift(username);
  req.app.set('users', users);
  res.redirect('/users/all');
});

module.exports = router;
