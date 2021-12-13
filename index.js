// //npm install express
// const express = require('express');
// //initialize express framework
// const app = express();
// //create “ENDPOINTS” aka route handlers
// app.get('/', function (req,res) {
// 	res.send('Hello world from express.js');
// });
// const PORT = process.env.PORT || 3000;
// //start server on a PORT
// app.listen(3000, ()=> console.log(`Server running on 3000`));


//imports
const express = require('express')
const app = express()
const port = 3000

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/scss', express.static(__dirname + 'public/scss'))

//Set views
app.set('views', './views')
app.set('views engine', 'ejs')


app.get('', (req,res) => {
	res.render('index', { text: 'This is EJS'})
})

app.get('/gallery', (req,res) => {
	res.render('gallery', { text: 'Gallery page'})
})
