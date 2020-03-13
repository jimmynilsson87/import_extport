const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const routes = require('./routes/routes');

app.use(express.static('public'));
app.use(routes);

app.listen(port, () => {
    console.log(`Server running on ${hostname}:${port}`);
})