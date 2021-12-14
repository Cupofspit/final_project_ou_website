//npm install express
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const {request} = require('express');


//initialize express framework
const app = express();


//initialize body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initialize ejs middleware
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/scss', express.static(__dirname + 'public/scss'));
app.use('', express.static(__dirname + ''));

//create “ENDPOINTS” aka route handlers
app.get('/', (req,res) => {
	res.render('index');
});

//nav routes
app.get('/index', (req,res) => {
	res.render('index');
});
app.get('/contact', (req,res) => {
	res.render('contact');
});
app.get('/gallery', (req,res) => {
	res.render('gallery');
});
app.get('/blog-single', (req,res) => {
	res.render('blog-single');
});
app.get('/blog-archive', (req,res) => {
	res.render('blog-archive');
});
app.get('/404', (req,res) => {
	res.render('404');
});

const PORT = process.env.PORT || 3000;
//start server on a PORT
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

