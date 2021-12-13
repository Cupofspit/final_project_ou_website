//npm install express
const express = require('express');
//initialize express framework
const app = express();
//create “ENDPOINTS” aka route handlers
app.get('/', function (req,res) {
	res.send('Hello world from express.js');
});
const PORT = process.env.PORT || 3000;
//start server on a PORT
app.listen(3000, ()=> console.log(`Server running on 3000`));

