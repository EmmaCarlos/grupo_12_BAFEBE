const express = require('express');
const app = express();
const path = require('path');
const use = require('./routes/web');

app.listen(4040, ()=> console.log('Server on http://localhost:4040'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(require('./routes/web'));