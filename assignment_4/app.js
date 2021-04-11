const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//DATA
app.set('users', []);

//TEMPLATES
app.set('view engine', 'ejs');

//ROUTES
app.use('/users', userRoute);

app.listen(9999, () => {
  console.log('Server listening on port 9999');
});
