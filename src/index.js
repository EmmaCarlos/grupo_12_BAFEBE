const express = require('express');
const app = express();
const path = require('path');

app.set("port",process.env.PORT || 4040)

//server 
app.listen(app.get("port"), () => console.log("Server Start on http://localhost:"+app.get("port")));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(require('./routes/web'));
