const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public'))); // load static files 

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/writing', (req, res) => {
    res.render('writing');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});




app.listen(8080, () => {console.log(`Server is running in http://localhost:8080`);})