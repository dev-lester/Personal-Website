const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Library for HTTP request logger middleware.

// Route files
const writings = require('./routes/writings');

// dotenv config
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));

// load static files
app.use(express.static(path.join(__dirname, '/public')));  

// mount routers
app.use('/api/writings', writings);








// Home route
// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/projects', (req, res) => {
//     res.render('projects');
// });

// app.get('/api/login', (req, res) => {
//     res.render('login');
// });



app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}`);
});