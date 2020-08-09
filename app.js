const express = require('express');


const app = express();



app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/about', (req, res) => {
    res.send('we are in about')
});

app.listen(3000);