const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Library for HTTP request logger middleware.
const connectDB = require('./config/db');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


// dotenv config
dotenv.config({
    path: './config/config.env'
});

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Use body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(methodOverride('_method'));

// Route files
const home = require('./routes/home');
const writings = require('./routes/writings');
const projects = require('./routes/projects');
const userRegister = require('./routes/user');
const errorPage = require('./routes/404'); // 404 page
const userLogin = require('./routes/login');
const contact = require('./routes/contact');


// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// load static files
app.use(express.static(path.join(__dirname, '/public')));

// express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

// express middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// express validator middleware
app.use(expressValidator({
    errorForamatter: function(params, msg, value) {
        var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg : msg,
            value: value
        };
    }
}));

// passport config
require('./config/passport')(passport);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// global variables for login/logout
app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

// mount routers
app.use('/', home);
app.use('/writings', writings);
app.use('/projects', projects);
app.use('/contact', contact);
app.use('/user', userRegister);
app.use('/user', userLogin);
app.use('*', errorPage); // 404 page


// Handle unhandled promise rejections 
const server = app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // server.close(() => process.exit(1));
    console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}`);
});
