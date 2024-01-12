// Create web server
// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const comments = require('./comments.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        user: req.body.user,
        comment: req.body.comment,
        date: new Date()
    };
    comments.push(comment);
    res.json(comment);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});