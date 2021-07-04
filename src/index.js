const express = require('express');
const app = express(); 
const path = require('path');

// App Server
app.set("port",process.env.PORT || 4040)
app.listen(app.get("port"), () => console.log("Server Start on http://localhost:"+app.get("port")));

//App Acces Public 
app.use(express.static(path.resolve(__dirname, '../public')));

//App Settings
app.set('views engine', 'ejs');
//App Middlewares

//App Routes
const main= require('./routes/main');
app.use(main);
