const express = require('express');
const app = express();
const port = 5000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
});