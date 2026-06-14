const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Version 1 - Jenkins CI/CD Working');
});

app.listen(3000, () => {
    console.log('Server Running on Port 3000');
});