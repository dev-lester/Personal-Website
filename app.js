const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Library for HTTP request logger middleware.
const connectDB = require('./config/db');

// dotenv config
dotenv.config({
    path: './config/config.env'
});

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Route files
const writings = require('./routes/writings');


// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());


// load static files
app.use(express.static(path.join(__dirname, '/public')));

// mount routers
app.use('/api/writings', writings);

// home route
app.get('/' , (req, res) => {
    res.render('index');
});







// Handle unhandled promise rejections 
const server = app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // CLose server and exit process
    server.close(() => process.exit(1));
});
// Stop the server from running 