const express = require('express');
const response = require('./ItemData.json');
const cors = require('cors');

const app = express();

//enables cors
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET',
    'preflightContinue': false
}));

app.get('/item/v1', (req, res) => {
    res.send(response);
});

app.listen(process.env.PORT || 8080);